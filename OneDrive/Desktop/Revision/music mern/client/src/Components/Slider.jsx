import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from 'styled-components'
import {sliderItems} from "../MyData"




const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
overflow: hidden;
display:flex;
top: 75px;

/* margin-top: 20px; */
`

const Arrow = styled.div`

width: 50px;
height: 50px;
position: absolute;
border-radius: 50%;
display: flex;
background-color: rgb(230,237,255);
align-items: center;
justify-content: center;
top:0;
bottom: 0;
left: ${p => p.direction ==="left" && "20px"};
right: ${p => p.direction ==="right" && "20px"};
margin: auto;
cursor: pointer;
z-index: 2;
opacity: 0.8;

`;

const Wrapper = styled.div`


height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideValue * -100}vw);

`;

const Slides = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props => props.bg)};

// background-color: brown;

`;
const ImageContainer = styled.div`

height: 100%;
flex:1;


`;
const Image = styled.img`
height: 80%;

`;

const Description = styled.div`
flex: 1;
padding: 50px;
width: 1280px;

`;
const Title = styled.h1`
font-size: 70px;

`;
const Desc = styled.p`
margin-top: 50px;
margin-right: 0;


letter-spacing: 2px;
font-size: 25px;
font-weight: 600;

`;
const Button = styled.button`
font-size: 22px;
background-color: transparent;
cursor: pointer;
padding: 5px;

`;


export const Slider = () => {

    const [slideValue, setSlideValue] = useState(0)

    const handleClick =(direction) =>{

        if(direction === "left"){

            setSlideValue(slideValue > 0 ? slideValue -1 : 2)


        }else if(direction === "right"){

            
            setSlideValue(slideValue < 2 ? slideValue + 1 : 0)


        }
    }
    return (
        <Container>
            <Arrow direction ="left" onClick= {() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideValue = {slideValue}>
                {sliderItems.map((item) => (

            
                <Slides bg = {item.bg} key = {item.id}>
                    <ImageContainer>
                        <Image src = {item.img}/>

                    </ImageContainer>

                    <Description>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Show</Button>

                    </Description>
                </Slides>
                ))}

            </Wrapper>

            <Arrow direction ="right" onClick= {() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
            


        </Container>
    )
}
