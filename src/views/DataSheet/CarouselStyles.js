import styled, { css } from "styled-components"

const width = '23.4vw', height = '23.5vh';

export const Container = styled.div`
overflow: hidden;
background:#f7f7f7;
`
export const Card = styled.div`
display:flex;
flex-direction:column;
width: 20.9vw;
height:45.8vh;
`
export const CardPhoto = styled.img`
height:22.9vh;
width:20.9vw;
object-fit:contain;
`
export const CardTitle = styled.span`
font-size:1.25rem;
font-weight:600;
padding: 3.1vh 0;
`
export const CardContent = styled.p`
font-size:1rem;
`
export const Children = styled.div`
position:relative;
  height: 45.8vh;
`;
export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 40%;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
export const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
export const Dots = styled.div`
  text-align:center;
  width:auto;
  z-index: 100;
`;