import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-evenly;
width: 70%;
margin: 0 15%;
// border: 1px solid black;
`

const PotluckDiv = styled.div`
border: 3px solid #679707;
border-radius: 20px;
width: 500px;
display: flex;
flex-flow: column nowrap;
align-items: center;
margin: 10px;
`

const initialState = {date: '', time: '', location: '', name: '', organizer: '', potluckid: '', items: []}

function PotLuck() {
	const [potluck, setPotluck] = useState(initialState)
	const {id} = useParams();

	useEffect(() => {
		axiosWithAuth().get(`https://potluck-tt11.herokuapp.com/potlucks/potluck/${id}`)
			.then(res => {
			//   console.log(res)
			  setPotluck(res.data)
			}).catch(err=>console.log(err))
	},[])

	console.log(potluck)
	return (
		<Container>
			<h2>{potluck.name}</h2>
		<PotluckDiv>
			<p>Location: {potluck.location}</p>
            <p>Date: {potluck.date}</p>
            <p>Time: {potluck.time}</p>
		</PotluckDiv>
			<h3>Organizer: {potluck.organizer}</h3>
		</Container>
	)
}

export default PotLuck
