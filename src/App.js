import React from "react";
import Nav from "./components/Nav.jsx";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Graph from "./components/Graph";
import Support from "./components/Support"
import Pricing from "./components/Pricing";
import Faq from "./components/Faq"
import Foot from "./components/Footer"
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
        <Graph/>
        <Support/>
        <Pricing/>
        <Faq/>
      </Main>
      <Footer> 
        <Foot/>
      </Footer>
    </Container>
  );
}

export default App;
