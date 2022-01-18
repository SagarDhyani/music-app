
import styled from "styled-components";


import Footer from "../Components/Footer";
import { Navbar } from '../Components/Navbar';
import {popularProducts} from "../MyData"



const Container = styled.div`
margin-top: 75px;

`;

const Wrapper = styled.div`
  padding: 20px;
 
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;






const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

 
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;




const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;





const SongsList = () => {
  
  return (
    <Container>
      <Navbar />
    
      <Wrapper>
       
        
        <Title>Welcome to playlist</Title>
        
        <Bottom>
          <Info>
            {popularProducts.map((item) => (

           
           
              <Product>
                <ProductDetail>
                  <Image src= {item.img} />
                  <Details>
                    <ProductName>
                      <b>Song:</b> {item.songs}
                    </ProductName>
                   
                  </Details>
                </ProductDetail>

                
                
              </Product>
               ))}

            

                
                
             
            
            <Hr />
          </Info>
         
        </Bottom>
      
         
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SongsList
