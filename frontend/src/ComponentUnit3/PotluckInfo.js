import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import './css/potluckInfo.css'

const PotluckInfo = () => {
    const [users, setUser] = useState([]);
    const [checked, setChecked] = useState(false);
    const history = useHistory();
    const [gusetEmail, setGuestEmail] = useState([]);
    useEffect(() => {
        axiosWithAuth()
        //    .get('/users/getuserinfo')
           //.get('/users/users')
           .get('/potlucks/getpotluckinfo')
           .then((response) => {
               console.log(response)
               setUser(response.data);
               console.log(users)
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);

    const handleChange = (event) => {
        
        const {type, value, checked} = event.target;
        //const valueFoodItem = type ==="checkbox"? checked : value;
        setChecked(!checked)
            axiosWithAuth()
                 .patch(`potlucks/updateitem/${value}`, {picked: checked})
                 .then((res) => {
                     //console.log(res);
                     window.location.reload();
                    //history.push('/potluck-info')
                 })
            console.log(checked);
        
    }

    const handleButtonInvite = (event) => {
        
        axiosWithAuth()
                  .post('/potlucks/potluck/{potluckid}/addguest/{userid}', gusetEmail)
                  .then((response) => {
                      setGuestEmail(response.data);
                      console.log(gusetEmail)
                  })
                  .catch((error) => {
                      console.error(error);
                  })
       
    }

    const handleDeleteButton= (userPI) => {
        
        console.log(userPI);
        axiosWithAuth()
          .delete(`/potlucks/potluck/${userPI.potluckid}`)
          .then((response) => {
              window.location.reload();
            //history.push('/potluck-info');
           })
          .catch((error) => {
            console.error(error);
          })
         }

    return(
        <>
            <div>
               <h2>Potluck Information</h2>
               <div class='potluckInfo'>
                    {users.map(userPI => (
                        <div class='user' key={userPI.id}>
                            <h4>{userPI.name}</h4>
                            <p>Location: {userPI.location}</p>
                            <p>Date & Time: {userPI.date}, {userPI.time}</p>
                            <p>Organized by : {userPI.organizer}</p>
                            <div>
                                <p><strong>Food Item</strong></p>
                                <div className='chackbox'>
                                   {userPI.items.map(foodItem => (
                                       <form key={foodItem.itemid}>
                                            <label>
                                                {foodItem.name}
                                                <input type="checkbox" checked={foodItem.picked ? "checked" : "" } name="foodItem" value={foodItem.itemid} onChange={handleChange}/>
                                            </label>
                                       </form>
                                    ))}
                                </div>
                                <div className="guest">
                                    <h4>Guests</h4>
                                    {userPI.users.map(guestName => (
                                        <p>{guestName.username}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="buttons"> 
                                <div className="inviteGuest">
                                    <button onClick={handleButtonInvite}>Invite more guest</button>
                                </div>
                                <div className="editInfo">
                                    <button>Edit Potluck Information</button>
                                </div>
                                <div className="deleteEvent" onClick={() => handleDeleteButton(userPI)} >
                                    <button>Delete an Event</button>
                                </div>
                            </div>

                        </div> ))
                        
                    }
                    
               </div>
               
               
           </div>
        </>
    )
}

export default PotluckInfo;