import React, { useEffect, useState } from 'react'
import { popularProducts } from "../MyData"
import styled from 'styled-components'
import { ProductsList } from './ProductsList'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Pagination from './Pagination'



const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
// margin: 5px;
padding: 20px;

`


export const Product = ({cat, filter, sort},match) => {
  
    // console.log("match:",match.params.page)

    console.log("location:", filter)
    // console.log("cat:", cat, filter, sort)

    const [albums, setAlbums] = useState([])

    const [filteredAlbums, setFilteredAlbums] = useState([])

    //
    
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // console.log("page:",pageNumber)

    // const [page, setPage] = useState(pageNumber);
    // const [pages, setPages] = useState(1);

    useEffect(() => {

        const getAlbums = async () => {

            try {

                const res = await axios.get(filter.genre ? `http://localhost:2345/albums?genre=${filter.genre}` :
                    `http://localhost:2345/albums`)

                

                setAlbums(res.data.data)

                


            }
            catch (error) { }


        }

        getAlbums()


    }, [filter])

    useEffect(() => {

        cat &&
            setFilteredAlbums(

                albums.filter((item =>
                    Object.entries(filter).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
                )
            )


    }, [albums, cat, filter])

    useEffect(() => {

        if (sort == "inc") {

            setFilteredAlbums((prev) => [...prev].sort((a, b) => b.year - a.year));

        } else if (sort == "dec") {

            setFilteredAlbums((prev) => [...prev].sort((a, b) => a.year - b.year));


        }


    }, [sort])

    return (
        <Container >
            
            {cat ? filteredAlbums.map((item) => <ProductsList item={item} key={item.id} />)
                : albums.map((item) =>

                    <ProductsList item={item} key={item.id} />

                )


            }
          

        </Container>




    )
}
