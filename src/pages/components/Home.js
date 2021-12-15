import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlider from "./ImgSlider";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({authorized}) {
  return (
      <Container>
        <Navbar>
          <NavBrand src="/logo192.png" />
          <NavLinks>
            <Wrap href="/">
              HOME        
            </Wrap>
            <Wrap href="/">
              ABOUT US
            </Wrap>
            <Wrap href="/register">
              LOGIN IN
            </Wrap>
          </NavLinks>
        </Navbar>
        <Content>
          <Heading>The 100% FUN PLATFORM FOR LEARNERS</Heading>
          <CreateBtn>
            <h1>Create a QUIZ</h1>
            <button>CREATE</button>
          </CreateBtn>
          <JoinBtn>
            <h1>Start a Random QUIZ</h1>
            <button href="/random-quiz">Start</button>
          </JoinBtn>
          <ImgSlider />
        </Content>
      </Container>
  );
}

export default Home;

const Container = styled.main`
  * {
    box-sizing: border-box;
  }
  overflow: hidden;
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
  cursor: pointer;
`

const Content = styled.div``

const Heading = styled.h1`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  color: #4f2525;
  margin-top: 50px;
`

const CreateBtn = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;

  button {
    width: 10vw;
    height: 5vh;
    margin-top: 20px;
    margin-inline: 30px;
    cursor: pointer;
    background: #192133;
    color: white;
    border-radius: 10px;
    border: none;    
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    
    &:hover{
      
    }
  }
`

const JoinBtn = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  font-family: 'Roboto', sans-serif;

  button {
    width: 10vw;
    height: 5vh;
    margin-top: 20px;
    margin-inline: 30px;
    cursor: pointer;
    background: #192133;
    color: white;
    border-radius: 10px;
    border: none;    
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    
    &:hover{
      
    }
  }
`