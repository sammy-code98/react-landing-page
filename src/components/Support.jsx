import React from "react";
import styled from "styled-components";
import { ReactComponent as Dots } from "../asset/dot.svg";
import { ReactComponent as Supp } from "../asset/support.svg";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const SupportText = styled.div`
  width: 30%;
  margin-left: 60px;
`;
const SupportHeader = styled.h5`
  font-size: 40px;
  color: #2d22ee;
  margin: 30px;
  padding-top: 60px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;
const SupportContainer = styled.div`
  width: 50%;
  padding-top: 50px;
`;
const Paragraph = styled.p`
  margin-left: 30px;
  margin-top: -20px;
  line-height: 1.4rem;
  font: 18px;
  text-align: justify;
  font-family: "Open Sans", sans-serif;
  color:#6A6D93;

`;

function Support() {
  return (
    <Container>
      <SupportText>
        <Dots style={dots} />
        <SupportHeader>
          We support you in 10 international Languages
        </SupportHeader>
        <Paragraph>
          We have a great support team that will giude you and profer solutions
          to your questions in the language you best understand
        </Paragraph>
      </SupportText>
      <SupportContainer>
        <Supp style={{ height: "250px", width: "100%" }} />
        <Dots style={dot} />
      </SupportContainer>
    </Container>
  );
}

const dots = {
  position: "absolute",
  marginTop: "-40px",
  marginLeft: "-40px",

};
const dot = {
  position: "absolute",
  transform: "translateX(-120%)",
  marginTop: "140px",
  zIndex: "-1",
};
export default Support;
