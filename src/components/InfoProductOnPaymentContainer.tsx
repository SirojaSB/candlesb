import styled from "styled-components";
import React from "react";

const StyledInfoProductContainer = styled.div<{image: string}>`
  display: flex;
  padding-bottom: 28px;
  padding-top: 28px;
  border-bottom: 1px solid rgba(86, 178, 128, 0.2);
  
  .info-product-img {
    background-image: url(${({image}) => image || ''});
    background-color: #F7F8FA;
    background-size: contain;
    width: 160px;
    height: 130px;
    position: relative;
    margin-right: 60px;
    
    p {
      width: 22px;
      height: 22px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #56B280;
      border-radius: 50%;
      position: absolute;
      top: -7px;
      right: -7px;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
  }
  
  .info-product-text {
    h4 {
      font-weight: 700;
      font-size: 16px;
      line-height: 38px;
      display: flex;
      align-items: center;
      letter-spacing: -0.9px;
    }
    
    p {
      font-weight: 700;
      font-size: 21px;
      line-height: 38px;
      display: flex;
      align-items: center;
      letter-spacing: -0.9px;
      color: #56B280;
    }
  }
`

type InfoProductProps = {
    id: number,
    count: number,
    title: string,
    price: number,
    imageUrl: string,
}

const InfoProductOnPaymentContainer: React.FC<InfoProductProps> = ({id, count, title, price, imageUrl}) => {
    return (
        <StyledInfoProductContainer image={imageUrl}>
            <div className='info-product-img'>
                <p>{count}</p>
            </div>
            <div className='info-product-text'>
                <h4>{title}</h4>
                <p>{price} ₽</p>
            </div>
        </StyledInfoProductContainer>
    )
}

export default InfoProductOnPaymentContainer
