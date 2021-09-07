import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import './css/guest.css'
import styled from 'styled-components'

const BackgroundDiv = styled.div`
width: 100%;
height: 100vh
`

const GuestInfo = () => {
    const [guest, setGuest] = useState([]);
    const [checked, setChecked] = useState({});
    // const [potluckid, setPotluckid] =useState("")
    const param = useParams();

    //console.log(param);

    useEffect(() => {
        axiosWithAuth()
            .get('/users/users')
            .then((response) => {
               console.log(response)
               setGuest(response.data);
               console.log(guest)
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);

    const changeHandler = (event) => {
        //console.log(checked)
        setChecked({...checked, [event.target.name]:event.target.checked})
        //console.log(checked)
    }

    useEffect(() => {
        console.log("checked: ", checked);
        // console.log("potluckid: ", potluckid);
        console.log(param.id);
        //setPotluckid(potluckid)
      }, [checked, param.id]); 

    const handleSubmit = (event) => {
        const {value} = event.target;
        console.log(value);
        axiosWithAuth()
             .post(`potlucks/potluck/${param.id}/addguest/${value}`)
             .then((response) => {
                 console.log(response)
             })
             .catch(error => {
                 console.error(error)
             })
    }
   //potlucks/potluck/{potluckid}/addguest/{userid}

    return(
        <BackgroundDiv>
        <div className="gi">
            <h2 className="h2">Invite Guest</h2>
            <div class='guestInfo'>

                <form onClick={handleSubmit}>
                    {guest.map(guestInfo => (
                            <div class='guest' key={guestInfo.userid}> 
                                <p>Name: {guestInfo.username}</p>
                                            <div className="emailCheckbox">
                                                {guestInfo.primaryemail}
                                                <input type="checkbox" checked={checked[guestInfo.primaryemail]} name={guestInfo.primaryemail} value={guestInfo.userid} onChange={changeHandler}/>
                                                {/* <input type="checkbox" checked={guestInfo.primaryemail ? checked : ""} name="guestEmail" value={guestInfo.userid} onChange={changeHandler}/> */}
                                            </div>                   
                            </div>
                    ))}
                    <div className="button">
                        <button>Invite Guest</button>
                    </div>
                </form>
            </div>
        </div>
        </BackgroundDiv>
    )

}

export default GuestInfo;