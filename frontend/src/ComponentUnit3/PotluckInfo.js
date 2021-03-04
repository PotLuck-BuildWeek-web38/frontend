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
                                       <form>
                                            <label>
                                                {foodItem.name}
                                                <input type="checkbox" checked={foodItem.picked ? "checked" : "" } name="foodItem" value={foodItem.itemid} onChange={handleChange}/>
                                            </label>
                                       </form>
                                           
                                   ))}
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