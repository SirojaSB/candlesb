import styled from "styled-components";
import React from "react";
import {useDispatch} from "react-redux";
import {decreaseCountOfItem, increaseCountOfItem, removeCartItem} from "../../redux/slices/cart/slice";
import ProductCounter from "../../components/ProductCounter";
import {CartItem} from "../../redux/slices/cart/types";

const StyledTableRowCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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

const TableRowCart: React.FC<CartItem> = ({id, imageUrl, title, price, count, totalPrice}) => {
    const dispatch = useDispatch()

    const increaseCounterCartProduct = () => {
        dispatch(increaseCountOfItem(id))
    }

    const decreaseCounterCartProduct = () => {
        dispatch(decreaseCountOfItem(id))
    }

    const removeProductOfCart = () => {
        dispatch(removeCartItem(id))
    }

    return (
        <StyledTableRowCart>
            <div className='cart-page-product'>
                <img src={imageUrl} alt="Фото продукта"/>
                <div>
                    <p>{title}</p>
                    <button onClick={() => removeProductOfCart()}>Remove</button>
                </div>
            </div>
            <p className='cart-page-price'>{price} ₽</p>
            <ProductCounter increaseCounterProduct={increaseCounterCartProduct} countProduct={count} decreaseCounterProduct={decreaseCounterCartProduct}/>
            <p className='cart-page-price'>{totalPrice} ₽</p>
        </StyledTableRowCart>
    )
}

export default TableRowCart
