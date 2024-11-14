import styled, {keyframes} from "styled-components";

const slidInEffect = keyframes`
0% {
opacity: 0.4;
scale: 0.4;
transform: translateY(100em);
}
50% {
opacity: 0.6;
scale: 0.6;
transform: translateY(50em);
}
90% {
opacity: 0.6;
scale: 0.6;
transform: translateY(10em);
}
100% {
opacity: 1;
scale: 1;
transform: translateY(0px);
}
`;



export const StyledSkillsContainer = styled.div`
margin: 1em 1em 0 1em;
padding: 5em 1em 12em 1em;
display: grid;
grid-template-columns: 10em 1fr ;
gap: 2em;
align-items: start;
`;

export const SkillsGrid = styled.div`
display: grid;
grid-template-rows: repeat(3, auto);
margin-right: 10rem;
justify-content: center;
`;

export const StyledSkill = styled.img`
margin: 0.1em 1.6rem 3.5em 1.6em;
animation: ${slidInEffect} linear;
animation-timeline: view();
animation-range: entry 10% cover 35%;

&:hover {
transform: scale(1.15);
}
`;