import React from 'react'
import { Navbar } from '../Components/Navbar'
import styled from 'styled-components'
import { Product } from '../Components/Product'

import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'
import{useState } from "react";

const Container = styled.div`

    

`

const Title = styled.h1`

margin-top: 75px;
    

`

const FilterCont = styled.div`

display: flex;
justify-content: space-evenly;

    

`

const Filter = styled.div`
margin-left:0px;
    
`



const Select = styled.select`

width: 100px;
height: 30px;
margin-left: -100px;
    
`

const Option = styled.option`

`

export const MyProducts = () => {

    const location = useLocation()
    const cat = location.pathname

    console.log(cat)

   console.log(location)

    const [filter, setFilters] = useState({})

    const [sort, setSort] = useState({})

    const handleFilters = (e) => {

        console.log("value:", e.target.value)

        const value = e.target.value.toLowerCase()

        setFilters({
            ...filter,
           [e.target.name] : value.toLowerCase()
        })
        
    }

    console.log("filter:", filter)
    // console.log("location:", cat)
    return (
        <Container>
            <Navbar />
            <Title>Music</Title>
            <FilterCont>
                <Filter>filter by:</Filter>
                <Select name = "genre" onChange={handleFilters}>
                    <Option defaultValue>Genre</Option>
                    <Option value ="Ghazals">Ghazals</Option>
                    <Option value ="Sufi">Sufi</Option>
                    <Option value ="Punjabi">Punjabi</Option>
                    <Option value ="Hindi">Hindi</Option>
                </Select>

                <Filter>Sort By year:</Filter>

                <Select onChange={e => setSort(e.target.value)} >
                    <Option defaultValue>Year</Option>
                    <Option value ="inc">New to old</Option>
                    <Option value ="dec">Old to new</Option>
                    
                </Select>

            </FilterCont>

            <Product cat ={cat} filter={filter} sort={sort}/>
            <Footer />

        </Container>


    )
}
