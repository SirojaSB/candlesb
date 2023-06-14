import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {SectionContainer} from "../../components/SectionContainer";

const StyledCartEmpty = styled(SectionContainer)`
  padding-top: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 17px;
  }
  
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 25.6px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 350px;
    color: rgba(11, 37, 75, .6);
  }

  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    text-decoration-line: underline;
    color: #56B280;
  }
`

const CartEmpty: React.FC = () => {
    return (
        <StyledCartEmpty>
            <h3>Корзина пустая</h3>
            <p>
                Вероятней всего, вы еще ничего не добавили в корзину.<br/>
                Чтобы добавить товар в корзину, перейдите на главную страницу.
            </p>
            <Link to='/'>На главную</Link>
        </StyledCartEmpty>
    )
}

export default CartEmpty
