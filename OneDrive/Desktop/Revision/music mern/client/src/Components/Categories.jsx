import React from 'react'
import {categories} from "../MyData"
import styled from 'styled-components'
import { CategoriesItem } from './CategoriesItem'

const Container = styled.div`

display: flex;
flex-wrap: wrap;

justify-content: space-between;
padding: 30px;




`

export const Categories = () => {
    return (

        <Container>
            {categories.map((item) => (
                <CategoriesItem item = {item} key ={item.id} />
            ))}


        </Container>




        
    )
}
