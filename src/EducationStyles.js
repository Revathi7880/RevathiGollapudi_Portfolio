import { Card } from "react-bootstrap";
import styled, {keyframes} from "styled-components";

const moveLineEffect = keyframes`
0% {
height: 0;
}
100% {
height: 100%;
}
`; 

const slidInEffect = keyframes`
0% {
opacity: 0;
transform: translateY(100em);
}  
50% {
opacity: 0;
transform: translateY(10em);
}
100% {
opacity: 1;
transform: translateY(0em);
}
`;

export const StyledEducationContainer = styled.div`
margin: 0 1.5em 0em 2.5em;
padding: 0em 1em 8em 1em;
display: grid;
grid-template-columns: 1fr 10em;
gap: 2em;
align-items: start;

@media (max-width: 1470px) {
  padding: 2em 1em;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;

  #educationHeading {
    order: -1;
  }
}
`;

export const EducationGrid = styled.div`
  display: grid;
  margin-top: 2em;
  padding: 3em 0em;
  grid-template-rows: repeat(2, auto);
  gap: 2em;
  position: relative;
  z-index: 0;

   &:after {
   content: '';
   position: absolute;
   width: 6px;
   height: 100%;
   background : #1e1b1b;
   top: 0;
   left: 50%;
   margin-left: -3px;
   z-index: -1;
   animation: ${moveLineEffect} 4s linear forwards;
   animation-timeline: view();
   animation-range: entry 20% cover 70%;
   box-shadow: 0 0.5em 0.5em 0 rgba(19, 143, 182, 0.20), 0 0.15em 0.3em 0 rgba(19, 143, 182, 0.50);
   }

   @media (max-width: 900px) 
   {
   &:after {
   left: 11.5em
   }
   }

  @media (max-width: 650px) 
   {
   &:after {
   left: 3em
   }
   }

  @media (max-width: 490px) 
   {
   &:after {
   left: 0em
   }
   }
`;

export const StyledEducationDiv = styled.div`
  padding: 0.6em 4em;
  position: relative;
  margin-top: -4em;
  width: 50%;
  left: ${(props) => props.left};
  animation: ${slidInEffect} ease-in;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;

  @media (max-width: 900px) 
  {
    left: 12em;
    margin-top: 0em;
    width: 70%;
  }

  @media (max-width: 650px) 
  {
    left: 4em;
    margin-top: 0em;
    width: 90%;
  }

  @media (max-width: 490px) 
  {
    left: 0em;
    margin-top: 0em;
    width: 100%;
  }
`;

export const StyledEducationCard = styled(Card)`
  padding: 1em 0em 0.3em 1em;
  backfround: #fff;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 0.5em 0.5em 0 rgba(19, 143, 182, 0.20), 0 0.15em 1em 0 rgba(19, 143, 182, 0.50);

 &:hover {
 transform: scale(1.05);
 }
`;

// export const StyledCollege = styled.img`
// position : absolute;
//   border-radius: 50%;
//   right: -1.75em;
//   top: 5em;
//   z-index: 1;
//   left: ${(props) => props.left ? props.left : 'auto'};
// `;

export const StyledCollege = styled.img`
  position : absolute;
  border-radius: 50%;
  right: -1.75em;
  top: 5em;
  z-index: 1;
  left: ${(props) => props.left ? props.left : 'auto'};

  @media (max-width: 900px) 
  {
    left: -2.5em;
  }

  @media (max-width: 650px) 
  {
    left: -3em;
  }

  @media (max-width: 650px) 
  {
    left: -2em;
  }
`;

export const StyledSpanLeft = styled.span`
  height: 0px;
  width: 0px;
  position: absolute;
  top: 6em;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #1e1b1b;
  right: -1em;
`;

export const StyledSpanRight = styled.span`
  height: 0px;
  width: 0px;
  position: absolute;
  top: 6em;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #1e1b1b;
  left: -1em;
`;