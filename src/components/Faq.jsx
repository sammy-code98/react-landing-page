import React from "react";
import styled from "styled-components";

const Container = styled.section`
  margin-top: 100px;
`;

const FaqHeader = styled.h5`
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
  line-height: 2rem;
  font: 18px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color:#6A6D93;
`;
function Faq() {
  return (
    <Container>
      <FaqHeader>
        Frequently {""}{" "}
        <span style={{ color: "#F44E77" }}>asked questions</span>
      </FaqHeader>
      <div style={{ width:"440px", margin:'auto'}}>
      <Paragraph>
        Not every bit of info you add to a component is state. Sometimes you
        need to add some metadata that gives other components more information
      </Paragraph>
      </div>
      
    </Container>
  );
}

export default Faq;
