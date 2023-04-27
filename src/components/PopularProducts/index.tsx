import React from "react";
import ProductCard from "../ProductCard";
import image from "../../assets/images/Product1.png";
import StyledProducts from "../Products/StyledProducts";
import ProductsContainer from "../Products/ProductsContainer";

const PopularProducts: React.FC = () => {
    return (
        <StyledProducts>
            <h3 className='title'>Из популярного</h3>
            <p className='subtitle'>Наши самые продаваемый позиции, которые могут вам понравиться</p>
            <ProductsContainer>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
                <ProductCard image={image} title='Spiced Mint' price='9.99'/>
            </ProductsContainer>
        </StyledProducts>
    )
}

export default PopularProducts
