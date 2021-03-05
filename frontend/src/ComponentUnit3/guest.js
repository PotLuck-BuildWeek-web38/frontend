import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const GuestInfo = () => {
    const [guest, setGuest] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/users/users')
            .then((response) => {
                console.log("something")
               //console.log('guest',response)
               setGuest(response.data);
               console.log(guest)
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);

    return(
        <div>
            <h2>Guest List</h2>
        </div>
    )

}

export default GuestInfo;