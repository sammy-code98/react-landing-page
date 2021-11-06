import React from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";

import styled from "styled-components";

const List = styled.li`
  background-color: transparent;
  width: 100%;
`;
const Button = styled.button`
  font-size: 16px;
  background-color:transparent;
  color: #6a6d93;
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 28px;
  margin: 28px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  transition: all 0.6s ease-in-out;

 
`;


const Control = styled.span`
  font-size: 20px;
`;
const AnswerWrapper = styled.div`
  margin: 30px;
  width: 100%;
  max-height: ${(props) => (props.clicked ? '100px' : '0')};
  transition: all 1s ease-in-out;
  overflow: hidden;


`;
const Answer = styled.div`
  background-color: #ffffff;
  padding: 18px 28px;
  margin: 28px;
  border-radius: 12px;
  line-height: 2rem;
  color: #6a6d93;
`;
function AccordionItem({ faq, clicked, onToggle }) {
  // destructure props here
  const { question, answer } = faq;
  return (
    <List>
      <Button onClick={onToggle}>
        {question}
        <Control>
          {clicked ? (
            <Icon path={mdiMinus} size={5 / 6} color="#16194F" />
          ) : (
            <Icon path={mdiPlus} size={5 / 6} color="#16194F" />
          )}
        </Control>
      </Button>
      <AnswerWrapper clicked={clicked}>
        <Answer>{answer}</Answer>
      </AnswerWrapper>
    </List>
  );
}

export default AccordionItem;
