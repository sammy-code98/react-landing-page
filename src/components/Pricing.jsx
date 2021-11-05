import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard"
// import { ReactComponent as Feather} from "../asset/feather.svg"
import Feather from "../asset/feather.svg"
const Container = styled.section`
  width: 100%;
  margin-top: 100px;
  background-image: url('${Feather}')

`;

const PriceHeader = styled.h5`
  font-size: 40px;
  color: #2d22ee;
  text-align: center;
  margin: 30px;
  padding-top: 60px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;
const Paragraph = styled.p`
margin-top: -20px;
line-height: 1.4rem;
font: 18px;
text-align: center;
font-family: "Open Sans", sans-serif;
color:#6A6D93;


`;

function Pricing() {
  return (
    <Container>

        <PriceHeader>
        Get an exceptional service,{" "}
        <span style={{ color: "#F44E77" }}>at the right price</span>
      </PriceHeader>
      <Paragraph>
        Start with our free plan and switch to premium as you grow
      </Paragraph>
<PriceCard/>
    </Container>
  );
}

export default Pricing;
