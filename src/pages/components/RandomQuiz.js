import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import "./RandomQuiz.css";

function RandomQuiz() {

    let askedCount = 0;
    let correctScore;
    let correctAnswer = "", totalQuestion = 10;

    // Event Listener
    const eventListeners = () => {
        document.querySelector(".checkBtn").addEventListener("click", checkAnswer)
    }

    document.addEventListener('DOMContentLoaded', function () {
        getQuestion();
        eventListeners();
    })

    const getQuestion = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await response.json();
        document.querySelector(".result").innerHTML = "";
        showQuestion(data.results[7]);
    }

    const showQuestion = (data) => {
        correctAnswer = data.correct_answer;
        let inCorrectAnswer = data.incorrect_answers;
        let allOpt = inCorrectAnswer;
        allOpt.splice(Math.floor(Math.random * (inCorrectAnswer.length + 1)), 0, correctAnswer);
        document.getElementById("QUES").innerHTML = `<h1> ${data.question} </h1>`
        document.querySelector(".options").innerHTML = `${allOpt.map((option, index) => `
            <li>${index + 1}. <span className="opt-margin"> ${option} </span></li>
        `).join("")}`

        selectOption();
    }

    const selectOption = () => {
        document.querySelector(".options").querySelectorAll("li").forEach((option) => {
            option.addEventListener("click", () => {
                if (document.querySelector(".options").querySelector(".selected")) {
                    const activeOption = document.querySelector(".options").querySelector(".selected");
                    activeOption.classList.remove("selected");
                }
                option.classList.add('selected');
            })
        })
    }

    const checkAnswer = () => {
        console.log(correctAnswer);
        document.querySelector(".checkBtn").disabled = true;
        if (document.querySelector(".options").querySelector('.selected')) {
            let selectedAnswer = document.querySelector(".options").querySelector('.selected span').textContent;
            if (selectedAnswer.trim() === HTMLDecode(correctAnswer)) {
                document.querySelector(".result").innerHTML = `<p> Correct !! </p>`
            } else {
                document.querySelector(".result").innerHTML = `<p> InCorrect !!  <br> <small>Correct Answer : ${correctAnswer}</small></p>`
            }
        } else {
            document.querySelector(".result").innerHTML = `<p>Please select an option!</p>`;
            document.querySelector("checkBtn").disabled = false;
        }
        checkCount();
    }

    const HTMLDecode = (textString) => {
        let doc = new DOMParser().parseFromString(textString, "text/html");
        return doc.documentElement.textContent;
    }

    const checkCount = () => {
        askedCount++;

        if (askedCount === totalQuestion) {

        }
        else {
            setTimeout(() => {
                getQuestion();
            }, 300)
        }
    }

    return (
        <Body>
            <Main>
                <Container>
                    <Heading>Quiz App</Heading>
                    <Question id='QUES'></Question>
                    <Options className="options">

                    </Options>
                    <CheckBtn className="checkBtn">
                        Check Answer
                    </CheckBtn>
                    <br />
                    <Result className="result">

                    </Result>
                </Container>
            </Main>
        </Body>
    )
}

export default RandomQuiz;

const Body = styled.body`    
`

const Main = styled.main`
    
`

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Heading = styled.h1`
    text-align: center;
    font-size: 70px;
    color: rgb(200, 100, 150);
    font-family: "Cascadia Code";
`

const Options = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    font-family: "Cascadia Code";
    color: rgb(155, 200, 200);

    li {
        margin-top: 50px;
        cursor: pointer;
    }
`

const Option = styled.li`
    
`

const Question = styled.h1`
    text-align: center;
    font-family: "Cascadia Mono";
    color: rgb(100, 150, 200);
    font-size: 30px;
    margin-bottom: -20px;
    `

const CheckBtn = styled.h1`
    font-family: "Cascadia Mono";
    background-color: rgb(100, 100, 100);
    width: 200px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: rgb(200, 200, 200);
        color: white;
    }
`

const Result = styled.p`
    font-size: 50px;    
    margin-top: -70px;
    font-family: "Cascadia Code";
`