import React from "react";
import styled from "styled-components";
import {OrderPaidItem} from "../../redux/slices/orders/types";

const StyledOrderItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid rgb(229, 229, 229);
  border-top: 1px solid rgb(229, 229, 229);
  border-radius: 15px;

  p {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .orders-page-products-info {
    font-weight: 900;
  }

  .orders-page-status {
    color: #56B280;
  }
`

const OrderItem: React.FC<OrderPaidItem> = (props) => {
    return (
        <StyledOrderItem>
            <p>№ 12e32e32re</p>
            <p>Количество: <span className='orders-page-products-info'>{props.productsInfo.subTotalCount}</span></p>
            <p>Общая стоимость: <span className='orders-page-products-info'>{props.productsInfo.subTotalPrice}</span></p>
            <p>Статус: <span className='orders-page-status'>оплачен</span></p>
        </StyledOrderItem>
    )
}

export default OrderItem
