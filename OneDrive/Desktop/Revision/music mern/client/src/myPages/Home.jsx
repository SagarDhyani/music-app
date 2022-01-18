import { Slider } from '../Components/Slider'
import React from 'react'

import { Navbar } from '../Components/Navbar'
import { Product } from '../Components/Product'

import Footer from '../Components/Footer'
import { MyProducts } from './MyProducts'
import Pagination from '../Components/Pagination'

export const Home = () => {
    return (
        <div>
        <Pagination />
            <Navbar />
            <Slider/>

            {/* <Categories />
            <Product /> */}
            <MyProducts />
           
            {/* <Footer /> */}

            <Pagination />

        </div>
    )
}
