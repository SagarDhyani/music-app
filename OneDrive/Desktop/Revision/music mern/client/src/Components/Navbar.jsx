import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import styled from 'styled-components'

const Container = styled.div`
height: 70px;

border: 1px solid black;
position: fixed;
top: 0;
background-color: white;
width: 100%;

overflow: hidden;
z-index:4;


`
const NavContainer = styled.div`

display: flex;

justify-content: space-between;
height: 100%;
/* padding-top: 0px; */


`

const Left = styled.div`

display: flex;
flex: 2;

`
const Headings = styled.h3`
justify-content: space-between;
padding-left: 30px;
padding-top: 5px;

`

const SearchBox = styled.div`
width: 300px;

display: flex;
height: 50px;
margin-top: 10px;
border-radius: 10px;
margin-left: 20px;

align-items: center;

background-color: rgb(245,245,246);




`
const InputBox = styled.input`
width: 100%;
margin-top: 2px;
height: 30px;
font-size: 15px;
border: none;
border-radius: 4px;
background-color: rgb(245,245,246);
margin-left: 10px;

`

const Center = styled.div`
flex: 1;

padding: 20px;



`
const Right = styled.div`

display: flex;
flex: 1;
padding-right: 30px;
justify-content: flex-end;


`

const RightMenu = styled.div`

font-size: 25px;
font-size: 1.17em;
font-weight: bolder;
margin-left: 10px;
padding-top: 22px;
cursor: pointer;

`




export const Navbar = () => {
    return (

        <Container>
            <NavContainer>

                <Left>
                    <Headings>Sufi</Headings>
                    <Headings>Ghazals</Headings>
                    <Headings>Punjabi</Headings>
                    <SearchBox>
                        <InputBox placeholder="Search for albums" />
                        <Search style = {{fontSize: 30, marginTop: 5, marginRight:10}} />
                    </SearchBox>


                </Left>
                <Center>One Search</Center>
                <Right>
                    <RightMenu>
                    <Badge badgeContent={4} color="primary" ><ShoppingCartOutlined /></Badge></RightMenu>
                    <RightMenu>REGISTER</RightMenu>
                    <RightMenu>SIGN IN</RightMenu>

                </Right>

            </NavContainer>
        </Container>




    )
}
