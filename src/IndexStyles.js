import styled, { keyframes } from "styled-components";
import {Col, Image } from "react-bootstrap";


const bounce = keyframes`
0% {
transform: translateY(0);
}
50% {
transform: translateY(-20px);
}
100% {
transform: translateY(0);
}
`;

const rotate = keyframes`
0% {
transform: rotate(0deg);
}
30% {
transform: rotate(5deg);
}
60% {
transform: rotate(-5deg);
}
100% {
transform: rotate(0deg);
}
`;

export const ExperienceCircle = styled.div`
width: 13em; 
height: 13em;
border-radius: 50%;
position: relative;
overflow: hidden;
background-image: linear-gradient(to bottom right, rgba(238,166,4,1), rgba(238,166,4,0.4));

&:hover {
  animation: ${bounce} 1.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  cursor: pointer;
  }
`;

export const ProjectsCircle = styled.div`
width: 11.5em; 
height: 11.5em;
border-radius: 50%;
position: relative;
overflow: hidden;
background-image: linear-gradient(to bottom right, rgba(240,16,10,1), rgba(240,16,10,0.5));
margin-left: 11.5em;
top: -5.5em;
&:hover {
    animation: ${bounce} 1.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    cursor: pointer;
  }
`;

export const SkillsCircle = styled.div`
width: 8.5em; 
height: 8.5em;
background-image: linear-gradient(to bottom right, rgba(18,209,15,1), rgba(18,209,15,0.4));
border-radius: 50%;
position: relative;
overflow: hidden;
margin-left: 3.5em;
top: -8em;
&:hover {
    animation: ${bounce} 1.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    cursor: pointer;
  }
`;

export const EducationCircle = styled.div`
width: 10em; 
height: 10em;
background-image: linear-gradient(to bottom right, rgba(180,80,220,1), rgba(180,80,220,0.5));
border-radius: 50%;
position: relative;
overflow: hidden;
margin-left: 10em;
top: -5.3em;
&:hover {
    animation: ${bounce} 1.5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    cursor: pointer;
  }
`;

export const StyledAboutContainer = styled.div`
position: relative;
overflow: hidden;
margin-bottom: 10em
`;

export const StylesImageCol = styled(Col)`
margin: 10em 0 0 5em;
`;

export const StylesAboutCol = styled(Col)`
margin: 10em 0 0 0;
`;

export const StylesNavCol = styled(Col)`
margin: 3em 0 0 0;
`;

export const StyledImageWrapper = styled.div`
display: flex;
justify-content: center;
`;

export const StyledImage = styled(Image)`
width: 17em;
height: 18em;
animation: ${rotate} 6s ease-in-out;
animation-direction: alternate;
animation-iteration-count: infinite; 

`;

export const StyledTableCell = styled.td`
padding: 0;
border: none;
`;

export const Bubble = styled.div`
position: absolute;
width: 7em;
height: 7em;
border-radius: 50%;
box-shadow: inset 0 0 25px rgba(19, 143, 182, 0.25)
`;

export const Link = styled.img`
width: 1.7rem;
height: 1.7rem; 
margin-right: 1.3em; 

&:hover {
transform: scale(1.15);
}
`;