import React from "react";
import {SectionContainer} from "../SectionContainer";
import ProductCard from "../ProductCard";
import styled from "styled-components";

import image from '../../assets/images/Product1.png'

const StyledProducts = styled(SectionContainer)`
  padding-top: 90px;
  padding-bottom: 125px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    line-height: 57.6px;
    margin-bottom: 15px;
  }

  .subtitle {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 27.6px;
    margin-bottom: 60px;
  }
`

const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 255px);
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Products: React.FC = () => {
    return (
        <StyledProducts>
            <h3 className='title'>Наша коллекция</h3>
            <p className='subtitle'>Закажите для себя или для своих близких</p>
            <ProductsContainer>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
            </ProductsContainer>
        </StyledProducts>
    )
}

export default Products
