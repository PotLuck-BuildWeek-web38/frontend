import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom'

const StyledForm = styled.form`
width: 600px;
height: 300px;
border: 3px solid gray;
display: flex;
flex-flow: column nowrap;
align-items: flex-end;
justify-content: space-evenly;
margin: 20px;
input{
    width: 400px;
    margin-right: 50px
}
button{
  align-self: center;
}
`
const ContainerDiv=styled.div`
width: 100%;
height: auto;
display: flex;
flex-flow: row nowrap;
justify-content: center;
`

const initialState = {name: '', location: '', date: '', time: '', organizer: '', items: ''}

function EditPotluck() {
    const [form, setForm] = useState(initialState)

    const history = useHistory()
    const {id} = useParams()
    
    useEffect(() => {
      axiosWithAuth().get(`https://potluck-tt11.herokuapp.com/potlucks/potluck/${id}`)
      .then(res=>{
        console.log(res)
        const itemsArrToString = 
        setForm({...form, name: res.data.name, location: res.data.location, date: res.data.date, time: res.data.time, organizer: res.data.organizer})
      })
      .catch(err=>console.log(err))
    },[])

    // console.log(currUser)

    const formChangeHandler = (e) => {
      setForm({...form,
        [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
      e.preventDefault();
      const itemsStringArray = form.items.split(',').map(item=>item.trim())
      const itemsArray = itemsStringArray.map(item=>{
        return {itemid: Date.now(), name: item, guest: '', picked: false}
      })
      console.log(itemsArray)
      const newPotluck = {name: form.name, location: form.location, date: form.date, time: form.time, organizer: form.organizer, items: itemsArray}
      console.log(newPotluck)
      axiosWithAuth().post('https://potluck-tt11.herokuapp.com/potlucks/potluck', newPotluck)
        .then(res=>{
          console.log(res);
          history.push('/myevents')
        })
        .catch(err=>console.log(err))
      
    }

    return (
        <ContainerDiv>
        <StyledForm onSubmit={formSubmit}>
            <label>Name <input
            className='shortInput'
            onChange={formChangeHandler}
            name='name'
            value={form.name}
            placeholder='Easter Bash'
            /></label>
            <label>Location <input
            className='shortInput'
            onChange={formChangeHandler}
            name='location'
            value={form.location}
            placeholder='125 Main st, Boston, MA 01884'
            /></label>
            <label>Date <input
            className='shortInput'
            onChange={formChangeHandler}
            name='date'
            value={form.date}
            placeholder='April 4'
            /></label>
            <label>Time <input
            className='shortInput'
            onChange={formChangeHandler}
            name='time'
            value={form.time}
            placeholder='2:30PM'
            /></label>
            <label>Items <input
            className='longInput'
            onChange={formChangeHandler}
            name='items'
            value={form.items}
            placeholder='ham, soda, etc(seperated by comma)'
            /></label>
            <button>Create Potluck</button>
        </StyledForm>
        </ContainerDiv>
    )
}

export default EditPotluck





// import React, {useState, useEffect} from 'react'
// import styled from 'styled-components'
// import axios from 'axios'

// const StyledForm = styled.form`
// width: 600px;
// height: 300px;
// border: 3px solid gray;
// display: flex;
// flex-flow: column nowrap;
// align-items: center;
// justify-content: space-evenly;
// margin: 20px;
// input{
//     width: 400px;
// }
// `
// const ContainerDiv=styled.div`
// width: 100%;
// height: auto;
// display: flex;
// flex-flow: row nowrap;
// justify-content: center;
// `

// const initialState = {name: '', location: '', date: '', time: '', organizer: '', items: []}

// function EditPotluck() {
//     const [form, setForm] = useState(initialState)
//     // const [formError, setFormError] = useState('')

//     // useEffect(() => {
//     //   axios.get('')
//     // },[])
    
//     const formChangeHandler = (e) => {
//       setForm({...form,
//         [e.target.name]: e.target.value})
//     }

//     const formSubmit = (e) => {
//       e.preventDefault();
//       const userid = ''/* <---- needs to be created/defined */
//       const updatedUser = initialState /* <---- needs to be created/defined */
//       axios.put(`https://potluck-tt11.herokuapp.com/users/user/${userid}`, updatedUser)
//         .then((res) => {
//           console.log(res)
//         }).catch((err) => {
//           console.log(err)
//         })
//     }

//     return (
//         <ContainerDiv>
//         <StyledForm onSubmit={formSubmit}>
//             <input
//             className='shortInput'
//             onChange={formChangeHandler}
//             name='name'
//             value={form.name}
//             placeholder='Potluck Name'
//             />
//             <input
//             className='shortInput'
//             onChange={formChangeHandler}
//             name='location'
//             value={form.location}
//             placeholder='Location'
//             />
//             <input
//             className='shortInput'
//             onChange={formChangeHandler}
//             name='date'
//             value={form.date}
//             placeholder='Date'
//             />
//             <input
//             className='shortInput'
//             onChange={formChangeHandler}
//             name='time'
//             value={form.time}
//             placeholder='Time'
//             />
//             <input
//             className='shortInput'
//             onChange={formChangeHandler}
//             name='organizer'
//             value={form.organizer}
//             placeholder='Organizer'
//             />
//             <input
//             className='longInput'
//             onChange={formChangeHandler}
//             name='items'
//             value={form.items}
//             placeholder='item1, item2, item3'
//             />
//             <button>Save Changes</button>
//         </StyledForm>
//         </ContainerDiv>
//     )
// }

// export default EditPotluck
