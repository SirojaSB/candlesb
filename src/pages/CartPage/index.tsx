import React from "react";
import InfoButton from "../../components/InfoButton";
import StyledCartPage from "./StyledCartPage";
import TableRowContainer from "./TableRowContainer";
import CellTitle from "./CellTitle";
import TableRowCart from "./TableRowCart";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {createOrderItem} from "../../redux/slices/orders/slice";
import CartEmpty from "./CartEmpty";

const CartPage: React.FC = () => {
    const {cartStore, subTotalPrice, subTotalCount} = useSelector((state: RootState) => state.cart)

    const location = useLocation().pathname

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const createOrder = () => {
        dispatch(createOrderItem({
            cartStore,
            subTotalPrice,
            subTotalCount,
        }))

        navigate('/cart/details', {state: {prevPath: location}})
    }

    if (!subTotalPrice) {
        return <CartEmpty/>
    }

    return (
        <StyledCartPage>
            <h3 className='cart-page-title'>Ваша корзина</h3>
            <Link to='/' className='cart-page-back-link'>На главную</Link>
            <TableRowContainer>
                <CellTitle size='580px'>Товар</CellTitle>
                <CellTitle size='55px'>Цена</CellTitle>
                <CellTitle size='75px'>Количество</CellTitle>
                <CellTitle size='55px'>Итого</CellTitle>
            </TableRowContainer>
            {cartStore.map((item) => (
                <TableRowCart key={item.id} {...item}/>
            ))}
            <div className='cart-page-total-section'>
                <div className='cart-page-total-section-info'>
                    <div>
                        <p>Общая сумма</p>
                        <p>{subTotalPrice} ₽</p>
                    </div>
                    <p className='cart-page-total-section-info-caption'>Стоимость доставки будет рассчитана позже</p>
                </div>
                <InfoButton width='189px' onClickButton={createOrder} isValid={cartStore.length !== 0}>
                    К оплате
                </InfoButton>
            </div>
        </StyledCartPage>
    )
}

export default CartPage
