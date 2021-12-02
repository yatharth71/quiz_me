import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Navbar>
        <NavBrand src="/logo192.png" />
        <NavLinks>
          <Wrap href="#">HOME</Wrap>
          <Wrap href="#">ABOUT US</Wrap>
          <Wrap href="#">SIGN UP</Wrap>
        </NavLinks>
      </Navbar>
      <Content>
        <Heading>The 100% FUN PLATFORM FOR LEARNERS</Heading>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
`

const Navbar = styled.div`
  background-color: #000033;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

const NavBrand = styled.img`
  width: 50px;
  cursor: pointer;
`

const NavLinks = styled.div`
  margin-left: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrap = styled.a`
  color: white;
  text-decoration: none;
  top: 0;
  font-family: "Oswald", sans-serif;
  margin-inline: 10px;
  font-size: 20px;
`

const Content = styled.div``

const Heading = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  color: #4f2525;
  margin-top: 50px;
`