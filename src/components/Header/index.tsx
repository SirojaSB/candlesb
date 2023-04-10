import React from "react";

import {CartButton, HeaderContainer, ProfileButton, StyledHeader} from "./StyledHeader";
import HeaderLogo from "../HeaderLogo";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <HeaderLogo/>
            <HeaderContainer>
                <ProfileButton/>
                <CartButton />
            </HeaderContainer>
        </StyledHeader>
    )
}

export default Header
