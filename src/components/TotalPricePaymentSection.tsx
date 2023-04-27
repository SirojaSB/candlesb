import React from "react";
import styled from "styled-components";
import producimg from '../assets/images/Product1.png'

const StyledTotalPricePaymentSection = styled.div`
  background-color: #F2F2F2;
  padding: 25px 236px 25px 58px;
  
  .total-price-payment-section-info {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    
    &-reg {
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      letter-spacing: -0.9px;
    }
    
    &-finally {
      font-weight: 700;
      font-size: 24px;
    }
    
    &-with-border {
      padding-bottom: 33px;
      border-bottom: 1px solid rgba(86, 178, 128, 0.2);
    }
  }
`

const InfoProductContainer = styled.div`
  display: flex;
  padding-bottom: 28px;
  padding-top: 28px;
  border-bottom: 1px solid rgba(86, 178, 128, 0.2);
  
  .info-product-img {
    background-image: url(${producimg});
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

const TotalPricePaymentSection: React.FC = () => {
    return (
        <StyledTotalPricePaymentSection>
            <InfoProductContainer>
                <div className='info-product-img'>
                    <p>1</p>
                </div>
                <div className='info-product-text'>
                    <h4>Spiced Mint Candlesb®</h4>
                    <p>$ 5.99</p>
                </div>
            </InfoProductContainer>
            <div className='total-price-payment-section-info'>
                <p className='total-price-payment-section-info-reg'>Цена продукта</p>
                <p className='total-price-payment-section-info-reg'>$ 5.99</p>
            </div>
            <div className='total-price-payment-section-info total-price-payment-section-info-with-border'>
                <p className='total-price-payment-section-info-reg'>Доставка</p>
                <p className='total-price-payment-section-info-reg'>Бесплатно</p>
            </div>
            <div className='total-price-payment-section-info'>
                <p className='total-price-payment-section-info-reg'>Всего</p>
                <p className='total-price-payment-section-info-reg total-price-payment-section-info-finally'>$ 5.99</p>
            </div>
        </StyledTotalPricePaymentSection>
    )
}

export default TotalPricePaymentSection
