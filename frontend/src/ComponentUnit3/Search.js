import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components'
import SearchCard from './SearchCard'

const SearchDiv = styled.div`
display: flex;
flex-flow: row wrap;
align-items: space-evenly;
justify-content: space-evenly;
width: 70%;
margin: 0 15%;
// border: 1px solid black;
`

function Search() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth()
           .get('/users/users')
           .then((response) => {
            //    console.log('users ', response)
               setUsers(response.data);
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);
    
    const potluckArray = []
    users.forEach(user=>user.potlucks.forEach(obj=>potluckArray.push(obj.potluck)))
    // console.log('potluckArray ',potluckArray)


    return (
        <div style={{textAlign: 'center'}}>
            <h2>Search Potlucks</h2>
        <SearchDiv>
            
            {potluckArray.length<1
            ? <h3>Loading...</h3>
            : potluckArray.map(potluck=>
                <SearchCard potluck={potluck} />
            )
            }
        </SearchDiv>
        </div>
    )
}

export default Search
