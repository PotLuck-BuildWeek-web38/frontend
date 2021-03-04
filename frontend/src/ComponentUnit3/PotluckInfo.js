import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import './css/potluckInfo.css'

const PotluckInfo = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        //    .get('/users/getuserinfo')
           .get('/users/users')
           .then((response) => {
               console.log('my events ',response)
               setUser(response.data);
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);

    return(
        <>
            <div>
               <h2>List of users.</h2>
               <div class='listOfUser'>
                {users.map(user => (
                    <div class='user' key={user.id}>
                        <p>User Name: {user.username}</p>
                        <p>email: {user.primaryemail}</p>
                    </div> ))
                }
               </div>
               
           </div>
        </>
    )
}

export default PotluckInfo;