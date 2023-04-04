import React from "react";

import logo from '../../assets/images/Logo.svg'
import {CartButton, HeaderContainer, ProfileButton, StyledHeader} from "./StyledHeader";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <img src={logo} alt="Лого"/>
                <p>Candlesb</p>
            </HeaderContainer>
            <HeaderContainer>
                <ProfileButton/>
                <CartButton />
            </HeaderContainer>
        </StyledHeader>
    )
}

export default Header
