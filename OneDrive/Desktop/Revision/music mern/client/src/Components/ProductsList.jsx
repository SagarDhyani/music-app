import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';


import styled from 'styled-components'

const IconContainer = styled.div`
opacity: 0;
width: 100%;
height: 100%;
display: flex;
position: absolute;
top:0;
left: 0;
align-items: center;
justify-content: center;
z-index: 3;
background-color:  rgba(0, 0, 0, 0.2);
cursor: pointer;


`


const Container = styled.div`
display: flex;
min-width: 300px;
height: 350px;
position: relative;
align-items: center;
justify-content: center;
background-color: rgb(252,241,237);
margin: 5px;

&:hover ${IconContainer}{
    opacity: 1;

}


`;

const Circle = styled.div`

width: 250px;
height: 250px;
border-radius: 50%;
background-color: white;
position: absolute;


`

const Image = styled.img`
height: 75%;
z-index: 2;


`


const Icon = styled.div`

width: 40px;
height: 40px;
display: flex;
background-color: white;
border-radius: 50%;
align-items: center;
justify-content: center;
margin: 8px;
transition: all 0.5 ease;

&:hover{
    background-color: rgb(247,205,124);
    transform: scale(1.1);

}
`

const Title = styled.h1`

font-size: 25px;
font-weight: 800;
color: yellow;
`

const Button = styled.button`
    
    width: 100%;
    height: 100%;
    font-size: 22px;
`




export const ProductsList = ({item}) => {

   
    

    return (
        
        <Container>
                  
           <Circle />
           
  
           <Image src = {item.image} />
           <IconContainer>
               
               <Icon>
               <Link to = {`/songs/${item._id}`} >
                  <Button>+</Button> 

                  </Link>
                 
                 
                  
               </Icon>
               
               <Title>{item.title} {item.year}</Title>

               
               
               
               </IconContainer>

             


               
        </Container>
       
        
    )
}


  
 
