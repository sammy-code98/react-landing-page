import React from "react";
import styled from "styled-components";
import { ReactComponent as BannerImg } from "../../asset/phone.svg";

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
`;
const BanImg = styled.div`
  width: 50%;
`;
const Header = styled.h1`
  font-size: 55px;
  text-align: center;
  color: grey;
  margin: 10px;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
`;
const Text = styled.div`
  width: 50%;
`;
const Paragraph = styled.p`
  margin-left: 40px;
  line-height: 1.4rem;
  font: 18px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color:#6A6D93;

`;
const Button = styled.button`
  background: #16194f;
  padding: 12px;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor:pointer;
  margin:auto 240px;
  transform:translateX(50%)
`;

function Banner() {
  return (
    <Container>
      <Text>
        <Header>Smart Banking for Freelancers</Header>
        <Paragraph>
          scheme that allow content creators to embed small files inline in
          documents, you can read more about it here. This approach allows us to
          use SVG images like an inline element.
        </Paragraph>
        <Button>Register Now</Button>
      </Text>

      <BanImg>
        <BannerImg style={{ height: "600px", width: "100%" }} />
      </BanImg>
    </Container>
  );
}

export default Banner;
