import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom'
import Items from './Items'

const StyledForm = styled.form`
width: 600px;
height: auto;
border: 3px solid #679707;
background-color: RGB(255,255,255, 0.85);

display: flex;
flex-flow: column nowrap;
align-items: flex-end;
justify-content: space-evenly;
margin: 20px;
input{
    width: 400px;
    margin: 10px 50px 10px 5px;
    
}
button{
  align-self: center;
  margin-bottom: 10px;
}
`
const ContainerDiv=styled.div`
width: 100%;
height: auto;
display: flex;
flex-flow: row nowrap;
justify-content: center;
`
const AddButton=styled.div`
border: 2px solid #324903;
background-color: #679707;
color: white;
border-radius: 50%;
width: 20px;
height: 20px;
// margin-right: 5px;
line-height: 15px;
text-align: center;
font-weight: bold;
margin-top: 8px;
`
const BackgroundDiv = styled.div`
width: 100vh;
height: 100vh
`

const initialState = {name: '', location: '', date: '', time: '', items: '', newItem: ''}

function EditPotluck() {
    const [form, setForm] = useState(initialState)
    const [potluckData, setPotluckData] = useState({})
    const [currItems, setCurrItems] = useState([])
    const [newItem, setNewItem] = useState({name: '', guest: '', picked: false})

    const history = useHistory()
    const {id} = useParams()
    
    useEffect(() => {
      axiosWithAuth().get(`https://potluck-tt11.herokuapp.com/potlucks/potluck/${id}`)
      .then(res=>{
        console.log(res)
        setPotluckData(res.data)
        // const itemsArr = res.data.items.map(obj=>obj.name)
        // const itemsArrToString = itemsArr.join(', ')
        setForm({...form, name: res.data.name, location: res.data.location, date: res.data.date, time: res.data.time})
        setCurrItems(res.data.items)
      })
      .catch(err=>console.log(err))
    },[])

    // console.log(currUser)

    const formChangeHandler = (e) => {
      setForm({...form,
        [e.target.name]: e.target.value})
    }

    const itemChangeHandler = (e) => {
      setNewItem({...newItem,
        [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
      e.preventDefault();
      // const itemsStringArray = form.items.split(',').map(item=>item.trim())
      // const itemsArray = itemsStringArray.map(item=>{
      //   return {itemid: Date.now(), name: item, guest: '', picked: false}
      // })
      // console.log(itemsArray)
      const editedPotluck = {...potluckData, name: form.name, location: form.location, date: form.date, time: form.time, items: []}
      console.log('edited: ',editedPotluck)
      axiosWithAuth().put(`https://potluck-tt11.herokuapp.com/potlucks/potluck/${id}`, editedPotluck)
        .then(res=>{
          console.log(res);
          history.push('/myevents')
        })
        .catch(err=>console.log(err))
      
    }

      const newItemClick = () => {
        const createdItem={items: [newItem]}
        axiosWithAuth().put(`https://potluck-tt11.herokuapp.com/potlucks/potluck/${id}`, createdItem)
        setCurrItems([...currItems, newItem])
        setNewItem({name: '', guest: '', picked: false})
      }

    return (
      <BackgroundDiv>
        <ContainerDiv>
        <StyledForm onSubmit={formSubmit}>
            <label>Name 
              <input
                className='shortInput'
                onChange={formChangeHandler}
                name='name'
                value={form.name}
                placeholder='Easter Bash'
              /></label>
            <label>Location 
              <input
                className='shortInput'
                onChange={formChangeHandler}
                name='location'
                value={form.location}
                placeholder='125 Main st, Boston, MA 01884'
              /></label>
            <label>Date 
              <input
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
            <p style={{alignSelf: 'center', textDecoration: 'underline', fontSize: '1.25rem'}}>Items</p>
            <div style={{display: 'flex', flexFlow: 'column nowrap', width: '440px', height: 'auto', alignSelf: 'flex-start', marginLeft: '113px'}}>
                {currItems.length<1
                ? <p>This potluck has no items! Add an item below.</p>
                : currItems.map((obj) => {
                  return (
                    <Items obj={obj} setCurrItems={setCurrItems} currItems={currItems} />
                  // <div 
                  //   style={{display: 'flex', height: '25px', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '6px'}} 
                  //   key={obj.itemid}
                  //   >
                  //     <DeleteButton onClick={deleteItemClick}>-</DeleteButton>
                  //     <p>{obj.name}</p>
                  // </div>
                )})
                }
            </div>
            <div style={{display: 'flex'}}><AddButton onClick={newItemClick}>+</AddButton>
              <input
                className='longInput'
                onChange={itemChangeHandler}
                name='name'
                value={newItem.name}
                placeholder='new item'
              /></div>
              <button>Save Changes</button>
        </StyledForm>
        </ContainerDiv>
      </BackgroundDiv>
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
