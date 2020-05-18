import styled, { css } from "styled-components"


export const Container = styled.div`
overflow: hidden;
background:#f7f7f7;

`
export const Card = styled.div`
display:flex;
flex-direction:column;
width: 17.8vw;
height:45.8vh;
@media (max-width: 768px) {
  width:40vw;
  height:22vh;
}

`
export const CardPhoto = styled.img`
height:22.9vh;
width:17.8vw; 
object-fit:contain;
@media (max-width: 768px) {
  width:auto;
  height:10vh;
}
`
export const CardTitle = styled.span`
font-size:1.25rem;
font-weight:600;
margin: 0.5vh 0;
@media (max-width: 768px) {
  font-size:0.8rem;
}
`
export const CardContent = styled.p`
font-size:1rem;
@media (max-width: 768px) {
  font-size:0.5rem;
}
`
export const Children = styled.div`
position:relative;
  height: 50.8vh;
  margin-top:7vh;
`;
export const Icon = styled.img`
height:3.2vh;
width: 0.9vw;
margin: auto 1vw;
`
export const Mask = styled.div`
height:23.7vh;
width:fit-content;
background-color: rgba(255, 255, 255, 0.56);
`
export const Arrow = styled.div`
display:flex;
height:23.7vh;
align-items:center;
justify-content:${props => props.derecha ? "flex-start" : "flex-end"};
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: 23.5vh;
  text-align:center;
  position: absolute;
  opacity: 0.9;
  border-radius:0.6vw;
  background-color: #dcdcdc;
  width:7%;
  top: 0.2%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 93%;` : css`left: 0%;`}
`;
export const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
  margin: 0 0.5vw
`;
export const Dots = styled.div`
 display:flex;
 justify-content:center;
  width:auto;
  z-index: 100;
  margin:4vh 0 2vh 0;
`;
export const SelectedDot = styled.div`
height:1.2vh;
width:3vw;
opacity: 0.5;
border-radius: 0.3vw;
background-color: #4a4a4a;
`
export const UnselectedDot = styled.div`
width: 1.2vh;
height: 0.6vw;
opacity: 0.5;
border-radius: 50%;
background-color: #c5c5c5;
`
export const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;

`