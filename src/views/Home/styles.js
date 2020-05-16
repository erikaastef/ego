import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction:column;
width: 85.9vw;
padding-top:11.7vh;
padding-bottom:  18.3vh;
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
align-items:center
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