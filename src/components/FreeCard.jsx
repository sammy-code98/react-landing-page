import React from 'react'
import styled from "styled-components";
import { ReactComponent as CardImg } from "../asset/card.svg";

import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";

const Free = styled.div`
  height: auto;
  width: 300px;
  background: #fff;

  border-radius: 24px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

const Header = styled.h4`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;
const Amount = styled.p`
text-align:center;
font-size:30px;
color:#000000;
fonr

`;
const Paragraph = styled.p`
  text-align: center;
  margin: 30px;
  line-height: 1.5rem;
  color: #6a6d93;
  
`;
const Button = styled.button`
  background: #fff;
  padding: 12px;
  width: 140px;
  color: #16194f;
  border: 1px solid #16194f;
  margin-left: 80px;
  border-radius: 12px;
  cursor: pointer;
`;

const List = styled.ul`
  margin-top: -40px;
  text-align: justify;
  list-style-type: none;
  font: 30px;
  padding:20px;
  font-family: "Open Sans", sans-serif;
  font-weight:500;
  line-height:2rem;

`;

function FreeCard() {
    return (
        
            <Free>
        <Header>Free</Header>
        <Amount>
          $0<span style={{ fontSize: "20px", color: "#000000" }}>/m</span>
        </Amount>
        <Paragraph>
          Manage your business with a simple and efficient account
        </Paragraph>
        <Button>Get Started</Button>
        <CardImg style={{ height: "300px", width: "100%" }} />
        <List>
          <li style={{ color: "#2D22EE"}}>
            {" "}
            <Icon path={mdiCheck} size={3/5} style={{padding:'2px'}}  color="#2D22EE"/>
            20 Local transfers
          </li>
          <li style={{ color: "#2D22EE"}}>
            {" "}
            <Icon path={mdiCheck} size={3/5} style={{padding:'2px'}}  color="#2D22EE"/>
            Free ATM  withdrawals  in Dollar up to $250 per month
          </li>
          <li style={{ color: "#2D22EE"}}>
            {" "}
            <Icon path={mdiCheck} size={3/5} style={{padding:'2px'}}  color="#2D22EE"/>
            Free ATM  withdrawals  in Dollar up to $250 per month
          </li>
          <li style={{ color: "#E5E5E5"}}>
            {" "}
            <Icon path={mdiCheck} size={3/5} style={{padding:'2px'}}  color="#E5E5E5"/>
            Free ATM  withdrawals  in Dollar up to $250 per month
          </li>
          <li style={{ color: "#E5E5E5"}}>
            {" "}
            <Icon path={mdiCheck} size={3/5} style={{padding:'2px'}}  color="#E5E5E5"/>
            Free ATM  withdrawals  in Dollar up to $250 per month
          </li>
        </List>
      </Free>
    )
}

export default FreeCard
