import styled from "styled-components";
import React from "react";
import chevron from "../assets/images/ChevronRight.svg";

const StyledNavPath = styled.div`
  margin: 21px 0 44px;
  display: flex;
  align-items: center;
  
  p {
    margin-right: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.9px;
    color: #616161
  }
  
  .nav-path-previous {
    color: #56B280;
  }

  .nav-path-current {
    font-weight: 500;
    color: black;
  }
  
  img {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }
`

const NavPath: React.FC<{page: string}> = ({page}) => {

    const detailsClassName = () => {
        if (page === 'details') {
            return 'nav-path-current'
        }

        return 'nav-path-previous'
    }

    const paymentClassName = () => {
        if (page === 'payment') {
            return 'nav-path-current'
        } else if (page === 'thanks') {
            return 'nav-path-previous'
        }

        return ''
    }

    const thanksClassName = () => {
        if (page === 'thanks') {
            return 'nav-path-current'
        }

        return ''
    }

    return (
        <StyledNavPath>
            <p className='nav-path-previous'>Корзина</p>
            <img src={chevron} alt=""/>
            <p className={detailsClassName()}>Детали</p>
            <img src={chevron} alt=""/>
            <p className={paymentClassName()}>Способ оплаты</p>
            <img src={chevron} alt=""/>
            <p className={thanksClassName()}>Готово</p>
        </StyledNavPath>
    )
}

export default NavPath
