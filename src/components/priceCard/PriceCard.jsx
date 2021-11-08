import React from "react";
import styled from "styled-components";
import FreeCard from '../priceUtility/FreeCard'
import PremiumCard from '../priceUtility/PremiumCard'

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 80px;

`;


function PriceCard() {
  return (
    <Container>
        <FreeCard/>
        <PremiumCard/>
      
    </Container>
  );
}

export default PriceCard;
