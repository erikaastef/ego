import styled, { css } from "styled-components"

export const Container = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
height: 9.7vh;
border-bottom: 0.1vh solid #cccccc;
`

export const Logo = styled.img.attrs({
    src: require("./img/logo.png")
})`
height:5.2vh;
width:2.9vw;
margin: 0 1vw 0 1vw;
@media (max-width: 768px) {
    margin: 0 3vw 0 3vw;
    width:9vw;
}

`
export const HamburgerMenu = styled.img.attrs({
    src: require("./img/menu.png")
})`
height:2.7vh;
width:2.1vw;
margin: 0 1vw 0 1vw;
@media (max-width: 768px) {
    margin: 0 3vw 0 3vw;
    width:8vw;
}
`
export const Button = styled.button`
all: unset;
display:inline-block;
height: 9.7vh;
padding-right:3.1vw;
padding-left:3.1vw;
@media (max-width: 768px) {
    display:none
}
${props => props.emphasis ? css`color:#eb0a1e; border-bottom: solid 0.5vh #eb0a1e` : ""}

`

export const Box = styled.div`
display: flex;

align-items:center;
`