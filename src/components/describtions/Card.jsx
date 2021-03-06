import React from "react";
import styled from "styled-components";
import { ReactComponent as CardImg } from "../../asset/card.svg";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  
`;
const CardText = styled.div`
  width: 30%;
  margin-left:60px;
`;
const ImgContainer = styled.div`
  width: 50%;
  margin-left:80px;
  padding-top:50px;
`;
const CardHeader = styled.h5`
  font-size: 45px;
  text-align: center;
  color: #2D22EE;
  margin: 10px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;
const Paragraph = styled.p`
  margin-left: 40px;
  line-height: 1.4rem;
  font: 18px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color:#6A6D93;

`;

function Card() {
  return (
    <Container>
      <CardText>
        <CardHeader>One card for all your payments</CardHeader>
        <Paragraph>
          Get 5% back on everything you buy with the draft card. Register today
          and enjoy every aspect of your business
        </Paragraph>
      </CardText>
      <ImgContainer>
        <CardImg style={{ height: "300px", width: "100%" }} />
      </ImgContainer>
    </Container>
  );
}

export default Card;
