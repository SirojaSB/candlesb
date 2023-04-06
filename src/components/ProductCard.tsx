import React from "react";
import styled from "styled-components";

type ProductCardProps = {
    [key: string]: string;
}

const StyledProductCard = styled.li<{ image: string }>`
  width: 255px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.07);
  border-radius: 5px;

  .product-image {
    background-image: url(${({image}) => image || ''});
    background-size: cover;
    background-color: #F7F8FA;
    height: 154px;
    width: 255px;
  }

  .product-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 27.6px;
    margin: 10px 0 0 26px;
  }

  .product-price {
    text-align: right;
    font-size: 20px;
    font-weight: 500;
    line-height: 27.6px;
    margin: 0 26px 16px 0;
    color: #56B280;
  }
`

const ProductCard: React.FC<ProductCardProps> = ({image, title, price}) => {
    return (
        <StyledProductCard image={image}>
            <div className='product-image'/>
            <p className='product-title'>{title}</p>
            <p className='product-price'>{price} $</p>
        </StyledProductCard>
    )
}

export default ProductCard
