import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components'

const SearchDiv = styled.div`
display: flex;
flex-flow: row wrap;
align-items: space-evenly;
justify-content: space-evenly;
width: 70%;
margin: 0 15%;
// border: 1px solid black;
`
const PotluckDiv = styled.div`
border: 3px solid #679707;
border-radius: 20px;
width: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
margin: 10px;
`

function Search() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axiosWithAuth()
           .get('/users/users')
           .then((response) => {
               console.log('users ', response)
               setUsers(response.data);
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);
    
    const potluckArray = []

    users.forEach(user=>user.potlucks.forEach(obj=>potluckArray.push(obj.potluck)))

    console.log('potluckArray ',potluckArray)

    return (
        <SearchDiv>
            <h2 style={{color: 'black'}}>Search Potlucks</h2>
            {potluckArray.length<1
            ? <h3>Finding Potlucks</h3>
            : potluckArray.map(potluck=>
                <PotluckDiv id={potluck.potluckid}>
                    <h4>{potluck.name}</h4>
                    <p>{potluck.location}</p>
                    <p>{potluck.date}</p>
                    <p>{potluck.time}</p>
                </PotluckDiv>
            )
            }
        </SearchDiv>
    )
}

export default Search
