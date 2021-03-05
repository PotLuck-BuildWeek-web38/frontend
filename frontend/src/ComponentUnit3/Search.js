import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled, { withTheme } from 'styled-components'
import SearchCard from './SearchCard'

const SearchDiv = styled.div`
display: flex;
flex-flow: row wrap;
align-items: space-evenly;
justify-content: space-evenly;
width: 70%;
margin: 0 15%;
// border: 1px solid black;
`

function Search() {
    const [potluckArray, setPotluckArray] = useState([]);

    useEffect(() => {
        axios
           .get('https://potluck-tt11.herokuapp.com/potlucks/potlucks')
           .then((response) => {
            //    console.log('potlucks ', response)
               setPotluckArray(response.data);
           })
           .catch((error) => {
               console.error(error);
           })
    }, []);


    return (
        <div style={{textAlign: 'center'}}>
            <h2 style={{color: 'white'}}>Search Potlucks</h2>
        <SearchDiv>
            
            {potluckArray.length<1
            ? <h3>Loading...</h3>
            : potluckArray.map(potluck=>
                <SearchCard key={potluck.potluckid} potluck={potluck} />
            )
            }
        </SearchDiv>
        </div>
    )
}

export default Search
