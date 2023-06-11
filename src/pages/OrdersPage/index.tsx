import React from "react";
import {Link} from "react-router-dom";
import StyledOrdersPage from "./StyledOrdersPage";
import OrderItem from "./OrderItem";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const OrdersPage: React.FC = () => {
    const {ordersPaid} = useSelector((state: RootState) => state.orders)

    return (
        <StyledOrdersPage>
            <h3 className='order-page-title'>Ваши заказы</h3>
            <Link to='/' className='orders-page-back-link'>Назад на главную</Link>
            <ul>
                {ordersPaid.map((item) => (
                    <OrderItem key={item.id} {...item}/>
                ))}
            </ul>
        </StyledOrdersPage>
    )
}

export default OrdersPage
