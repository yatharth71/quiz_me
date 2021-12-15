import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                    <img src="https://media.istockphoto.com/photos/innovation-and-new-ideas-lightbulb-concept-with-question-mark-picture-id1279690557?b=1&k=20&m=1279690557&s=170667a&w=0&h=BnH7EPIgwwpPyKMfeBJr87Ql900NFKjLYknrzvfi3Dw=" alt="First Image of the Carousel" />
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/photos/question-mark-picture-id1292771469?b=1&k=20&m=1292771469&s=170667a&w=0&h=XU4Moc0bZoR4xywHxRZR0ynUAbpRRt9lQ6ShuoSoBUM=" alt="First Image of the Carousel" />
                </Wrap>
                <Wrap>
                    <img src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt="First Image of the Carousel" />
                </Wrap>
            </Carousel>
        </div>
    )
}

export default ImgSlider



const Carousel = styled(Slider)`
    justify-content: center;
    align-items: center;
    
    @media (min-width: 1412px) {
        margin-left: 540px;
    }

    @media (max-width: 1412px) and (min-width: 1419px) {
        margin-right: 100px;
    }

    @media (max-width:1419px) and (min-width: 817px) {
        margin-left: 300px;
    }
`

const Wrap = styled.div` 

    @media (max-width: 608){
        img {
            border-radius: 4px;
            width: 20vw;
            height: 200px;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
            box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -webkit-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -moz-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
        }
    }

    @media (max-width: 573px){
        img {
            border-radius: 4px;
            width: 100vw;
            height: 50vh;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
            box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -webkit-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -moz-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
        }
    }

    @media (max-width: 1019px) and (min-width: 768px){
        img {
            border-radius: 4px;
            width: 100vw;
            height: 50vh;
            margin-right: 200px;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
            box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -webkit-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -moz-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
        }
    }

    @media (max-width: 1019px) and (min-width: 800px){

        img {
            border-radius: 4px;
            width: 80vw;
            height: 30vh;
            margin-right: 200px;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
            box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -webkit-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
            -moz-box-shadow: -5px -3px 16px -7px rgba(0,0,0,0.9);
        }
    }
`
