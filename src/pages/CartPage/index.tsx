import React from "react";
import ProductCounter from "../../components/ProductCounter";
import InfoButton from "../../components/InfoButton";
import producimg from '../../assets/images/Product1.png'
import StyledCartPage from "./StyledCartPage";
import TableRowContainer from "./TableRowContainer";
import CellTitle from "./CellTitle";
import TableRowCart from "./TableRowCart";

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
                {/*<ProductCounter/>*/}
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
