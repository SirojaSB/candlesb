import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

type ProductCardProps = {
    image: string,
    title: string,
    price: number,
    id: number
}

const StyledProductCard = styled.li<{ image: string }>`
  width: 255px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  cursor: pointer;


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

const ProductCard: React.FC<ProductCardProps> = ({image, title, price, id}) => {
    const navigate = useNavigate()

    const followToProductPage = () => {
        navigate(`/candles/${id}`)
        window.scrollTo(0, 0)
    }

    return (
        <StyledProductCard image={image} onClick={() => followToProductPage()}>
            <div className='product-image'/>
            <p className='product-title'>{title}</p>
            <p className='product-price'>{price} ₽</p>
        </StyledProductCard>
    )
}

export default ProductCard
