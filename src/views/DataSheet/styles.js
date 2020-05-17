import styled from "styled-components"


export const Container = styled.div`
display:flex;
flex-direction: column
`
export const Box = styled.div`
display:flex;
flex-wrap:wrap;
margin:9.4vh auto;
width:87.3vw;
`
export const Photo = styled.img`
height:50.2vh;
width:43.65vw;
object-fit:contain;
`
export const Info = styled.div`
display:flex;
flex-direction: column;
height:50.2vh;
width:43.65vw;
`
export const InfoTitle = styled.span`
font-size:1.25rem;
font-weight:600;
`
export const Emphasis = styled.span`
font-size:3.125rem;
font-weight:600;
`

export const InfoContent = styled.p`
font-size:1rem;
width:30.7vw;
height:fit-content;
`

export const Carousel = styled.div`
display:flex;
flex-wrap:wrap;
background:#f7f7f7;
`
export const Card = styled.div`
display:flex;
flex-direction:column;
margin: 6.7vh 0.8vw 11.7vh 0.8vw;
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
