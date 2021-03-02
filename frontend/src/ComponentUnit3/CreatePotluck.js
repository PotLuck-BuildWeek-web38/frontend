import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledForm = styled.form`
width: 600px;
height: 300px;
border: 3px solid gray;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-evenly;
margin: 20px;
input{
    width: 400px;
}
`
const ContainerDiv=styled.div`
width: 100%;
height: auto;
display: flex;
flex-flow: row nowrap;
justify-content: center;
`

const initialState = {name: '', location: '', date: '', time: '', organizer: '', items: []}

function CreatePotluck() {
    const [form, setForm] = useState(initialState)
    // const [formError, setFormError] = useState('')
    
    const formChangeHandler = (e) => {
      setForm({...form,
        [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
      e.preventDefault();
      const userid = ''/* <---- needs to be created/defined */
      const updatedUser = initialState /* <---- needs to be created/defined */
      axios.put(`https://potluck-tt11.herokuapp.com/users/user/${userid}`, updatedUser)
        .then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
    }

    return (
        <ContainerDiv>
        <StyledForm onSubmit={formSubmit}>
            <input
            className='shortInput'
            onChange={formChangeHandler}
            name='name'
            value={form.name}
            placeholder='Potluck Name'
            />
            <input
            className='shortInput'
            onChange={formChangeHandler}
            name='location'
            value={form.location}
            placeholder='Location'
            />
            <input
            className='shortInput'
            onChange={formChangeHandler}
            name='date'
            value={form.date}
            placeholder='Date'
            />
            <input
            className='shortInput'
            onChange={formChangeHandler}
            name='time'
            value={form.time}
            placeholder='Time'
            />
            <input
            className='shortInput'
            onChange={formChangeHandler}
            name='organizer'
            value={form.organizer}
            placeholder='Organizer'
            />
            <input
            className='longInput'
            onChange={formChangeHandler}
            name='items'
            value={form.items}
            placeholder='item1, item2, item3'
            />
            <button>Create Potluck</button>
        </StyledForm>
        </ContainerDiv>
    )
}

export default CreatePotluck
