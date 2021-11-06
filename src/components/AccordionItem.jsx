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
  background-color: ({active}) => active ? #fff : transparent;
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
 
`;
const Control = styled.span`
  font-size: 20px;
`;
const AnswerWrapper = styled.div`
  margin: 30px;
  width: 100%;
`;
const Answer = styled.div`
  background-color: #ffffff;
  padding: 18px 28px;
  margin: 28px;
  border-radius: 12px;
  line-height: 2rem;
  color: #6a6d93;
`;
function AccordionItem({ faq, active, onToggle }) {
  // destructure props here
  const { question, answer } = faq;
  return (
    <List active={active}>
      <Button onClick={onToggle}>
        {question}
        <Control>
          {active ? (
            <Icon path={mdiMinus} size={5 / 6} color="#16194F" />
          ) : (
            <Icon path={mdiPlus} size={5 / 6} color="#16194F" />
          )}
        </Control>
      </Button>
      <AnswerWrapper>
        <Answer>{answer}</Answer>
      </AnswerWrapper>
    </List>
  );
}

export default AccordionItem;
