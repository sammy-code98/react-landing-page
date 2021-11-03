import React from "react";
import styled from "styled-components";
import { ReactComponent as GraphImg } from "../asset/graph.svg";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const GraphContainer = styled.div`
  width: 30%;
  padding-top: 50px;
`;
const GraphText = styled.div`
  width: 30%;
  margin-left: 60px;
`;
const GraphHeader = styled.h5`
  font-size: 40px;
  color: #2d22ee;
  margin: 10px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;
const Paragraph = styled.p`
  margin-left: 30px;
  line-height: 1.4rem;
  font: 18px;
  text-align: justify;
  font-family: "Open Sans", sans-serif;
`;
const Button = styled.button`
  background: #16194f;
  padding: 12px;
  color: #fff;
  border: none;
  margin-left: 10px;
  border-radius: 12px;
  cursor:pointer;
`;

function Graph() {
  return (
    <Container>
      <GraphContainer>
        <GraphImg
          style={{
            height: "300px",
            width: "100%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 0px 0px",
          }}
        />
      </GraphContainer>

      <GraphText>
        <GraphHeader>Manage your finances like a pro in no time</GraphHeader>
        <Paragraph>
          With Finance, book keeping , bancking and invoices are all in one
          place .You always know where your stand is
        </Paragraph>
        <Button>Learn More</Button>
      </GraphText>
    </Container>
  );
}

export default Graph;
