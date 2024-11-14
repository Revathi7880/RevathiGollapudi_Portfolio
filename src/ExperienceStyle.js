import { Card } from "react-bootstrap";
import styled, {keyframes} from "styled-components";

const slidInEffect = keyframes`
0% {
opacity: 0.4;
scale: 0.4;
transform: translateX(-100em);
}
50% {
opacity: 0.6;
scale: 0.6;
transform: translateX(-50em);
}
80% {
opacity: 0.7;
scale: 0.7;
transform: translateX(-15em);
}
97% {
opacity: 0.4;
scale: 0.5;
transform: translateX(-5em);
}
100% {
opacity: 1;
scale: 1;
transform: translateX(0px);
}
`;

export const StyledExperienceContainer = styled.div`
margin: 0 1.5em 10em 2.5em;
padding: 0em 1em;
display: grid;
grid-template-columns: 1fr 10em;
gap: 2em;
align-items: start;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 2em;
`;

export const StyledCard = styled(Card)`
padding: 0;
margin: 0 0 2em 0;
animation: ${slidInEffect} ease-in;
animation-timeline: view();
animation-range: entry 10% cover 30%;
box-shadow: 0 0.5em 0.5em 0 rgba(19, 143, 182, 0.20), 0 0.15em 1em 0 rgba(19, 143, 182, 0.50);

 &:hover {
 transform: scale(1.02);
 }
`;
