import React from "react";
import {Link} from "react-router-dom";
import StyledOrdersPage from "./StyledOrdersPage";
import OrderItem from "./OrderItem";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const OrdersPage: React.FC = () => {
    const {ordersPaid} = useSelector((state: RootState) => state.orders)
    console.log(ordersPaid)
    return (
        <StyledOrdersPage>
            <h3 className='order-page-title'>Ваши заказы</h3>
            {ordersPaid.length === 0 ? <p className='order-page-empty'>История ваших заказов пуста.<br/>
                Самое время перейти на главную страницу, чтобы выбрать для себя что-нибудь.</p> : ''}
            <Link to='/' className='orders-page-back-link'>На главную</Link>
            <ul>
                {ordersPaid.map((item) => (
                    <OrderItem key={item.id} {...item}/>
                ))}
            </ul>
        </StyledOrdersPage>
    )
}

export default OrdersPage
