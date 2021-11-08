import React, { useState } from "react";
import styled from "styled-components";

import { faqs } from "../../AccordionData";
import AccordionItem from "./AccordionItem";

const Container = styled.section`
  max-width: 700px;
  margin: auto;
  padding: 0 10px;
`;
const AccordList = styled.ul`
  list-style: none;
`;
function Acordion() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  };
  return (
    <Container>
      <AccordList>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            onToggle={() => handleToggle(index)}
            clicked={clicked === index}
          />
        ))}
      </AccordList>
    </Container>
  );
}

export default Acordion;
