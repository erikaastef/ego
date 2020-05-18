import styled, { css } from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction:column;
width: 85.9vw;
padding-top:11.7vh;
margin: 0 auto;
@media (max-width: 768px) {
    padding-top:4.3vh;
    width: 90vw;
}
`

export const Header = styled.h1`
font-size: 6.7vh;
font-weight: bold;
@media (max-width: 768px) {
    font-size: 4.3vh;
}
`

export const Filter = styled.div`
display:flex;
font-size:1.9vh;
justify-content:space-between;
align-items: center;

border-bottom: 0.1vh solid #cccccc;
@media (max-width: 768px) {
   padding-bottom: 1.5vh;
}
`

export const Box = styled.div`
display:flex;
align-items:center;
@media (max-width: 768px) {
   display:none;
 }
`
export const Option = styled.button`
all: unset;
margin:2.4vh;
padding: 1.1vh 1.4vw;
:focus{
    border-radius: 1.4vw;
    background-color: #f7f7f7;
}
@media (max-width: 768px) {
    display:none
}
`
export const Catalog = styled.div`
display:flex;
flex-wrap: wrap;

padding-bottom:  18.3vh;
@media (max-width: 768px) {
  justify-content:center
}
`
export const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:cente;
width:fit-content;
margin-top:10.4vh;
`
export const Info = styled.div`
display:flex;
`
export const Name = styled.span`
font-size: 3.8vh;
font-weight: 600;
@media (min-width: 768px) {
  color:  ${props => props.hover ? "#eb0a1e" : "#000000"}
}

`
export const Year = styled.span`
padding-right:0.7vw;
border-right: 0.1vh solid #191919
`
export const Price = styled.span`
padding-left:0.7vw;
`
export const Photo = styled.img`
height:18.3vh;
width:20.9vw;
object-fit: contain;
@media (max-width: 768px) {
    height:22vh;
  width:75vw
}
`
export const Button = styled.button`
all: unset;
margin:2.4vh;
padding: 1.1vh 1.4vw;
border-radius: 1.4vw;
background-color:  #191919;
color:#ffffff;
visibility: ${props => props.hover ? "visible" : "hidden"};

}
`
export const Select = styled.select`
  width: 10.7vw;
  height: 6.2vh;
  background: white;
  color: black;
  padding-left: 0.3vw;
  font-size: 0.7rem;
  border: none;
  margin-left: 10px;
  outline:none;
  border-radius: 1.4vw;
 
 
  option {
    color: black;
    background: white;
    border-bottom: 0.1vh solid #cccccc;
   


  }
  @media (max-width: 768px) {
    display:block; 
    width: 35vw;
  }
  ${props => props.hidden ? css`display:none` : css`display:inline-block`}
`;