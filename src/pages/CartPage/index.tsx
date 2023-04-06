import React from "react";
import ProductCounter from "../../components/ProdictCounter";
import InfoButton from "../../components/InfoButton";
import producimg from '../../assets/images/Product1.svg'
import styled from "styled-components";
import {SectionContainer} from "../../components/SectionContainer";

const StyledCartPage = styled(SectionContainer)`
  padding-top: 47px;
  padding-bottom: 147px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .cart-page-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 17px;
  }

  .cart-page-back-link {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    text-decoration-line: underline;
    color: #56B280;
    margin-bottom: 60px;
  }
  
  .cart-page-total-section {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 70px;
      
      div {
        display: flex;
        margin-bottom: 9px;
        
        p {
          font-weight: 700;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: -0.9px;
          
          &:last-of-type {
            margin-left: 40px;
          }
        }
      }
      
      &-caption {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        text-align: right;
        letter-spacing: -0.9px;
        color: #9E9E9E;
      }
    }
  }
`

const TableRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const CellTitle = styled.p<{size?: string}>`
  width: ${({size}) => size || '100px'};
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.9px;
`

const TableRowCart = styled(TableRowContainer)`
  margin-top: 17px;
  margin-bottom: 43px;
  padding-top: 33px;
  padding-bottom: 28px;
  border-bottom: 1px solid #E5E5E5;
  border-top: 1px solid #E5E5E5;
  
  .cart-page-product {
    width: 580px;
    display: flex;
    
    img {
      width: 160px;
      height: 130px;
      background-color: #F7F8FA;
      margin-right: 30px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    
    p {
      font-weight: 700;
      font-size: 22px;
      line-height: 58px;
      letter-spacing: -0.9px;
    }

    button {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.9px;
      text-decoration-line: underline;
      color: #56B280;
      border: none;
      background-color: transparent;
    }
  }

  .cart-page-price {
    width: 55px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.9px;
  }
`

const CartPage: React.FC = () => {
    return (
        <StyledCartPage>
            <h3 className='cart-page-title'>Your cart items</h3>
            <p className='cart-page-back-link'>Back to shopping</p>
            <TableRowContainer>
                <CellTitle size='580px'>Product</CellTitle>
                <CellTitle size='55px'>Price</CellTitle>
                <CellTitle size='75px'>Quantity</CellTitle>
                <CellTitle size='55px'>Total</CellTitle>
            </TableRowContainer>
            <TableRowCart>
                <div className='cart-page-product'>
                    <img src={producimg} alt="Фото продукта"/>
                    <div>
                        <p>Spiced Mint Candleaf®</p>
                        <button>Remove</button>
                    </div>
                </div>
                <p className='cart-page-price'>$ 10</p>
                <ProductCounter/>
                <p className='cart-page-price'>$ 10</p>
            </TableRowCart>
            <div className='cart-page-total-section'>
                <div className='cart-page-total-section-info'>
                    <div>
                        <p>Sub-total</p>
                        <p>$ 10</p>
                    </div>
                    <p className='cart-page-total-section-info-caption'>Tax and shipping cost will be calculated later</p>
                </div>
                <InfoButton width='189px'>
                    Check-out
                </InfoButton>
            </div>
        </StyledCartPage>
    )
}

export default CartPage
