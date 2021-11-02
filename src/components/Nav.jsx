import React from "react";
import styled from "styled-components";


const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background:#2D22EE;
  color:#fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;


`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;
const ListItem = styled.li`
margin-left: 50px;
margin-right:50px;
cursor:pointer;
font-family: 'Open Sans', sans-serif;
`
const Header = styled.h1`
margin:10px;
font-family: 'Fruktur', cursive;

`


function Nav() {
  return (
    <Navigation>
      <Header >Finance</Header>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <button style={buttonStyle}>Sign In</button>
    </Navigation>
  );

}

const buttonStyle = {
    padding: '8px',
    margin: '4px',
    marginRight: '40px',
    border:'none',
    borderRadius:'8px',
    background:'#F44E77',
    color:'#fff',
    fontSize:'16px',
    textAlign:'center',
    display: 'inline-block',
    cursor: 'pointer',
    fontFamily: 'Open Sans',

}
export default Nav;
