import React from "react";
import styled from "styled-components";
import InfoProductOnPaymentContainer from "./InfoProductOnPaymentContainer";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

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

const TotalPricePaymentSection: React.FC = () => {
    const {cartStore, subTotalPrice} = useSelector((state: RootState) => state.cart)

    return (
        <StyledTotalPricePaymentSection>
            {cartStore.map((item) => <InfoProductOnPaymentContainer key={item.id} {...item}/>)}
            <div className='total-price-payment-section-info'>
                <p className='total-price-payment-section-info-reg'>Цена продукта</p>
                <p className='total-price-payment-section-info-reg'>{subTotalPrice} ₽</p>
            </div>
            <div className='total-price-payment-section-info total-price-payment-section-info-with-border'>
                <p className='total-price-payment-section-info-reg'>Доставка</p>
                <p className='total-price-payment-section-info-reg'>Бесплатно</p>
            </div>
            <div className='total-price-payment-section-info'>
                <p className='total-price-payment-section-info-reg'>Всего</p>
                <p className='total-price-payment-section-info-reg total-price-payment-section-info-finally'>{subTotalPrice} ₽</p>
            </div>
        </StyledTotalPricePaymentSection>
    )
}

export default TotalPricePaymentSection
