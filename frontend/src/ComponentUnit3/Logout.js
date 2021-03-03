import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Logout = () => {
    const history = useHistory();

    useEffect (() => {
        axiosWithAuth()
           .get("/logout")
           .then((res) => {
               console.log(res)
             localStorage.removeItem("token");
             history.push("/")
           })
           .catch((error) => {
               console.log(error)
               history.push("/")
           })
    }, [])

    return(
        <>
        </>
    )
  };

export default Logout;