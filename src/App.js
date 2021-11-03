import React from "react";
import Nav from "./components/Nav.jsx";
import Banner from "./components/Banner";
import Card from "./components/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  height: 100vh;
`;
const Main = styled.main`
  flex: 1;
`;
const Footer = styled.footer``;

function App() {
  return (
    <Container>
      <Nav />
      <Main>
        <Banner />
        <Card />
      </Main>
      <Footer>footer </Footer>
    </Container>
  );
}

export default App;
