import styled from "styled-components";
import profile from "../../assets/images/ProfileIcon.svg";
import cart from "../../assets/images/CartIcon.svg";
import React from "react";

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  
  .header-profile-button {
    width: 34px;
    height: 34px;
    border: 0;
    background-color: transparent;
    background-image: url(${profile});
  }
  
  .header-cart-button {
    margin-left: 20px;
    width: 26px;
    height: 26px;
    background-image: url(${cart});
    border: 0;
    background-color: transparent;
  }
`

const HeaderContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledHeaderContainer>
        {children}
    </StyledHeaderContainer>
}

export default HeaderContainer
