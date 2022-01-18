import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 5px;
height: 75vh;
position : relative;

`;

const Image = styled.img`

width: 100%;
height: 100%;
object-fit: cover;

`;

const Description = styled.div`
top: 0;
left:0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position:absolute;


`;

const Title = styled.h1`
font-size: 50px;
color: yellow;
font-weight: 900;

`
const Button = styled.button`
cursor: pointer;
border: none;
font-weight: 800;
height: 50px;
width: 300px;
border-radius: 10px;
background-color: rgb(231,44,48);
color: white;
font-size: 22px;

`

export const CategoriesItem = ({item}) => {
    return (
        <Container>
            <Image src = {item.img} />

            <Description>
                <Title >{item.title}</Title>
                
                <Button>SONGS</Button>
            </Description>
        </Container>
    )
}
