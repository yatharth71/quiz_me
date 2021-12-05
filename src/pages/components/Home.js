import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

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
        <CreateBtn>
          <h1>Create a QUIZ</h1>
          <button>CREATE</button>
        </CreateBtn>
        <JoinBtn>
          <h1>Join a QUIZ</h1>
          <button>JOIN</button>
        </JoinBtn>
        <Carousel {...settings}>
          <WrapCarousel>
            <img src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt="First Image of the Carousel" />
          </WrapCarousel>
        </Carousel>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  * {
    box-sizing: border-box;
  }
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

const Carousel = styled(Slider) `

`

const WrapCarousel = styled.div `

`