import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 300px;
  background-color: #dce2f0;
  margin-top: 80px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Header = styled.h1`
  margin-top: 40px;
  margin-left: 80px;
  font-family: "Fruktur", cursive;
  color: #6a6d93;
  font-size: 50px;
`;
const Paragraph = styled.p`
  margin: 30px;
  line-height: 1.4rem;
  font: 18px;
  text-align: justify;
  font-family: "Open Sans", sans-serif;
  color: #6a6d93;
`;
const Text = styled.div`
  width: 50%;
`;
const Links = styled.div`
  width: 50%;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const LinkItem = styled.li`
  list-style-type: none;
`;

function Foot() {
  return (
    <Container>
      <Text>
        <Header>Finance</Header>
        <Paragraph>Copyright @ 2021, Finlance LLCAll rights reserved</Paragraph>
      </Text>
      <Links>
        <LinkList>
          <LinkItem>Home</LinkItem>
          <LinkItem>Home</LinkItem>
          <LinkItem>Home</LinkItem>
          <LinkItem>Home</LinkItem>
          <LinkItem>Home</LinkItem>
          <LinkItem>Home</LinkItem>
          <LinkItem>Home</LinkItem>
        </LinkList>
      </Links>
    </Container>
  );
}

export default Foot;
