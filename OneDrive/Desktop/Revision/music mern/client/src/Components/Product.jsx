import React, { useEffect, useState } from 'react'
import { popularProducts } from "../MyData"
import styled from 'styled-components'
import { ProductsList } from './ProductsList'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import Pagination from './Pagination'



const Container = styled.div`
display: flex;
flex-wrap: wrap;

justify-content: space-between;
// margin: 5px;
padding: 20px;

`


export const Product = ({ cat, filter, sort }) => {



    const { pageNumber } = useParams()

    var data = useParams()


    const p = Number(pageNumber)

    console.log("filter:", filter)
    // console.log("cat:", cat, filter, sort)

    const [albums, setAlbums] = useState([])

    const [filteredAlbums, setFilteredAlbums] = useState([])

    //

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // console.log("page:",pageNumber)

    const [page, setPage] = useState(pageNumber);
    const [pages, setPages] = useState(1);

    useEffect(() => {

        const getAlbums = async () => {



            try {



                let res = await axios.get(filter.genre ? `http://localhost:2345/albums?genre=${filter.genre}&page=${page}` :
                    page ? `http://localhost:2345/albums?genre=${page}&page=${filter.genre}` : `http://localhost:2345/albums?page=${page}`)


                // console.log("responseeeeee:",res)

                const { data } = res

                setPages(data.pages)

                setAlbums(res.data.data)
                setLoading(false)



            }
            catch (error) {



                setLoading(false)

                setError("Error there")
            }


        }

        getAlbums()


    }, [filter, page])

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
        <>

            {loading ? <h1>Wait Loading.....</h1> : error ? <h1>{error}</h1> : (
                <>
                    <Container >


                        {/* <Pagination page={page} pages={pages} changePage ={setPage} /> */}

                        {cat ? filteredAlbums.map((item) => <ProductsList item={item} key={item.id} />)
                            : albums.map((item) =>

                                <ProductsList item={item} key={item.id} />

                            )

                        }



                    </Container>
                    <Pagination page={page} pages={pages} change={setPage} />

                     </>               
                                    
                )}



                </>




            )
            }
