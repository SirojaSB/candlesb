import React from "react";
import ProductCard from "../ProductCard";

import image from '../../assets/images/Product1.png'
import {ProductsContainer, StyledProducts} from "./StyledProducts";


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
