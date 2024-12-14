import styled, {keyframes} from "styled-components";

const slidInEffect = keyframes`
0% {
opacity: 0;
transform: translateX(-5em);
}
100% {
opacity: 1;
transform: translateX(0em);
}
`;



export const StyledSkillsContainer = styled.div`
margin: 1em 1em 0em 1em;
padding: 5em 1em 10em 1em;
display: grid;
grid-template-columns: 10em 1fr ;
gap: 2em;
align-items: start;

@media (max-width: 1470px) {
  padding: 2em 1em;
  grid-template-columns: 1fr;
}
`;

export const SkillsGrid = styled.div`
display: grid;
grid-template-rows: repeat(5, auto);
grid-template-rows: auto auto;
margin-right: 10rem;
justify-content: center;

@media (max-width: 1050px) {
    margin-right: 0;
    place-items: center;
}

@media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    margin-right: 0;
    place-items: center;
}

@media (max-width: 470px) {
    grid-template-columns: repeat(2, 1fr);
    margin-right: 0;
    place-items: center;
}
    
@media (max-width: 340px) {
    grid-template-columns: 1fr;
    margin-right: 0;
    place-items: center;
}
`;

export const StyleContainer = styled.div`
  perspective: 1000px;
`;

export const StyledSkill = styled.img`
margin: 0.1em 1.6rem 3.5em 1.6em;
animation: ${slidInEffect} linear;
animation-timeline: view();
animation-range: entry 10% cover 30%;

&:hover {
transform: scale(1.15);
}
`;

export const StyledHeadingSkills = styled.h1`
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

  @media (max-width: 1470px) {
    font-size: 6em;
    transform: none;
    margin-bottom: 0.5em;
  }

    @media (max-width: 1100px) {
    font-size: 4em;
    transform: none;
    margin-bottom: 0.5em;
  }

  @media (max-width: 600px) {
    font-size: 3em;
    transform: none;
    margin-bottom: 0.5em;
  }
`;