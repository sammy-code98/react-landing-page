import React from "react";
import styled from "styled-components";

import { faqs } from "../AccordionData";
import AccordionItem from "./AccordionItem";

const Container = styled.section`
  max-width: 700px;
  margin:auto;
  padding: 0 10px;
`;
const AccordList = styled.ul`
  list-style: none;
 
`;
function Acordion() {
  return (
    <Container>
      <AccordList>
        {faqs.map((faq, index) => (
          <AccordionItem  key={index} faq={faq}/>
        ))}
      </AccordList>
    </Container>
  );
}

export default Acordion;
