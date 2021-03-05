import React from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const DeleteButton=styled.div`
border: 2px solid #5b0606;
background-color: #960707;
color: white;
border-radius: 50%;
width: 20px;
height: 20px;
margin-right: 5px;
line-height: 15px;
text-align: center;
font-weight: bold;
`

function Items(props) {
    const {obj, currItems, setCurrItems}= props
    const deleteItemClick = (id) => {
        axiosWithAuth().delete(`https://potluck-tt11.herokuapp.com/potlucks/item/${id}`)
        setCurrItems(currItems.filter(item=>item.itemid!==id))
      }
    return (
        <div 
            style={{display: 'flex', height: '25px', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '6px'}} 
            key={obj.itemid}
            >
              <DeleteButton onClick={()=>deleteItemClick(obj.itemid)}>-</DeleteButton>
              <p>{obj.name}</p>
        </div>
    )
}

export default Items
