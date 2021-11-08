import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
height:200px;
background-color:#DCE2F0;
margin-top:80px;
display:flex;
flex-direction:column;
`
const Header = styled.h1`
  margin-top: 40px;
  margin-left: 80px;
  font-family: "Fruktur", cursive;
  color:#6A6D93;
  font-size: 50px;
`;

function Foot() {
    return (
        <Container>
            <Header>Finance</Header>
            footer dded
        </Container>
    )
}

export default Foot
