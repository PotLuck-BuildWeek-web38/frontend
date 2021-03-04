import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

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
        <div>
            <h2>Search Potlucks</h2>
            {potluckArray.length<1
            ? <h3>Finding Potlucks</h3>
            : potluckArray.map(potluck=>
                <div id={potluck.potluckid}>
                    <h4>{potluck.name}</h4>
                    <p>{potluck.location}</p>
                    <p>{potluck.date}</p>
                    <p>{potluck.time}</p>
                </div>
            )
            }
        </div>
    )
}

export default Search
