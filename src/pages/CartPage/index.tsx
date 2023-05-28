import React from "react";
import ProductCounter from "../../components/ProductCounter";
import InfoButton from "../../components/InfoButton";
import producimg from '../../assets/images/Product1.png'
import StyledCartPage from "./StyledCartPage";
import TableRowContainer from "./TableRowContainer";
import CellTitle from "./CellTitle";
import TableRowCart from "./TableRowCart";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const CartPage: React.FC = () => {
    const {cartStore} = useSelector((state: RootState) => state.cart)

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
            {cartStore.map((item) => (
                <TableRowCart key={item.id} {...item}/>
            ))}
            <div className='cart-page-total-section'>
                <div className='cart-page-total-section-info'>
                    <div>
                        <p>Sub-total</p>
                        <p>$ 10</p>
                    </div>
                    <p className='cart-page-total-section-info-caption'>Tax and shipping cost will be calculated
                        later</p>
                </div>
                <InfoButton width='189px'>
                    Check-out
                </InfoButton>
            </div>
        </StyledCartPage>
    )
}

export default CartPage
