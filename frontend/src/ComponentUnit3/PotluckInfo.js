import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import './css/potluckInfo.css'

const PotluckInfo = () => {
    const [users, setUser] = useState([]);
    const [checked, setChecked] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth()
        //    .get('/users/getuserinfo')
           //.get('/users/users')
           .get('/potlucks/getpotluckinfo')
           .then((response) => {
               console.log('my events ',response)
               setUser(response.data);
               console.log(users)
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);

    const handleChange = (event) => {
        
        const {value, checked} = event.target;
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

    const handleButtonInvite = (userPI) => {
        history.push(`/invite/${userPI.potluckid}`)
    }

    const handleEditbutton = (userPI) => {
        history.push(`/edit/${userPI.potluckid}`)
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
            <div className="pinfo">
               {/* <h2>Potluck Information</h2> */}
               <div class='potluckInfo'>
                    {users.map(userPI => (
                        <div class='user' key={userPI.id}>
                            <h3>{userPI.name}</h3>
                            <p>Location: {userPI.location}</p>
                            <p>Date & Time: {userPI.date}, {userPI.time}</p>
                            <p>Organized by : {userPI.organizer}</p>
                            <div>
                                <p><strong>Food Item</strong></p>
                                <div className='checkbox'>
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
                                    <p><strong>Guests</strong></p>
                                    {userPI.users.map(guestName => (
                                        <p>{guestName.user.username}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="buttons"> 
                                <div className="inviteGuest" onClick={() => handleButtonInvite(userPI)}>
                                    <button>Invite more guest</button>
                                </div>
                                <div className="editInfo" onClick={() => handleEditbutton(userPI)}>
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