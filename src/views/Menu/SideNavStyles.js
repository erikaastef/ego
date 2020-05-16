import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:space-evenly;
background-color:#ffffff;
height:100%;
width:30.4vw;
position:fixed;
top:0;
right:0;
@media (max-width: 768px) {
position:static;
    top:9.7vh;
    width:100%;
}
`

export const List = styled.ul`
list-style: none;
width:100%;
text-align:right;
background-color: ${props => props.theme.main}
`
export const CloseButton = styled.div`
display:flex;
align-items:center;
margin:4%;
`
export const ListItem = styled.li`
padding:1.5%;
`

export const CloseIcon = styled.img.attrs({
    src: require("./img/closeIcon.png")
})`
height:1.7vh;
width:0.9vw;
margin-left:0.9vw;
@media (max-width: 768px) {
   width:3vw;

margin-left:2vw;
}
`
export const Divider = styled.div`
height: 0.1vh;
width:25vw;
background:#efeeef;
margin: 0 auto;
@media (max-width: 768px) {
  height: 0.15vh;
  width:78vw;

 }
`