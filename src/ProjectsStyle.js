import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const HangEffect1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(4deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const HangEffect2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-4deg);
  }
  75% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const HangEffect3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const slidInEffect = keyframes`
from { 
opacity : 0;
scale: 0.2;
}
to { 
opacity : 1
scale: 1;
}
`;

export const StyledProjectContainer = styled.div`
overflow: hidden;
margin: 1em;
padding: 5em 1em;
margin-bottom: 6em;
display: grid;
grid-template-columns: 10em 1fr;
gap: 2em;
align-items: start;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 2em;
`;


export const StyledHeading = styled.h1`
  font-family: 'Trebuchet MS', sans-serif;
  letter-spacing: 0.21em;
  text-transform: uppercase;
  color: transparent;
  font-size: 8em;
  text-align: center;
  transform: rotate(90deg);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.12em;
  -webkit-text-stroke-color: #1e1b1b;
  text-shadow: 2px 2px 20px rgba(19, 143, 182, 0.5);
`;

export const Word = styled.span`
 animation: ${slidInEffect} 1s ease forwards;
  animation-delay: ${props => props.delay}s;
`;

export const StyledLine = styled.hr`
  border: 0.1em solid #ffffff;
  border-radius: 0.2em;
  background-color: #ffffff;
  opacity: 1;
  margin-top: 1.8em; 
`;

export const ProjectContainer1 = styled.div`
  perspective: 1000px;
  width: 22em;
  height: 22em;
  margin: 1.5em 1em;
  animation: ${HangEffect1} 5s ease-in-out infinite;
  transform-origin: top center;
  cursor: pointer;
  &:hover {
    animation: none;
  }
`;

export const ProjectContainer2 = styled.div`
  perspective: 1000px;
  width: 22em;
  height: 22em;
  margin: 1.5em 1em;
  animation: ${HangEffect2} 5s ease-in-out infinite;
  transform-origin: top center;
  cursor: pointer;
  &:hover {
    animation: none;
  }
`;

export const ProjectContainer3 = styled.div`
  perspective: 1000px;
  width: 22em;
  height: 22em;
  margin: 1.5em 1em;
  animation: ${HangEffect3} 5s ease-in-out infinite;
  transform-origin: top center;
  cursor: pointer;
  &:hover {
    animation: none;
  }
`;

export const StyledImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1.3s ease-in-out;
  perspective: 1000px;
  box-shadow: 0 0.5em 0.5em 0 rgba(19, 143, 182, 0.20), 0 0.15em 1em 0 rgba(19, 143, 182, 0.50);

  &:hover {
    transform: rotateY(180deg);
  }
`;


export const StyledFront = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const StyledBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledProjectHeading = styled.h1`
font-family: Trebuchet MS, sans-serif;
letter-spacing: 0.18em;
text-transform: uppercase;
color: white;
font-size: 2.5em;
margin-bottom: 0.4em;
-webkit-text-fill-color: red;
-webkit-text-stroke-width: 0.15em;
`;

export const StyledImageCaption = styled.div`
  text-align: center;
  height: 2.4em;
  padding: 1em 1em 0.1em 1em;
`;

export const StyledDot = styled.span`
background-color: white;
opacity: 0.3;
display: inline-block;
height: 0.8em;
width: 0.8em;
border-radius: 50%;
margin-bottom: 0.8em;
box-shadow: 0 0 4px 2.5px rgba(19, 143, 182);
`;




