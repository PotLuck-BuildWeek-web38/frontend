import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const PotluckDiv = styled.div`
border: 3px solid #679707;
border-radius: 20px;
width: 300px;
display: flex;
flex-flow: column nowrap;
align-items: center;
margin: 10px;
`

function SearchCards(props) {
    const {potluck} = props
    let history = useHistory()

    const clickHandler = () => {
        history.push(`/potluck/${potluck.potluckid}`)
    }

    return (
        <PotluckDiv onClick={clickHandler} id={potluck.potluckid}>
                    <h4>{potluck.name}</h4>
                    <p>{potluck.location}</p>
                    <p>{potluck.date}</p>
                    <p>{potluck.time}</p>
        </PotluckDiv>
    )
}

export default SearchCards
