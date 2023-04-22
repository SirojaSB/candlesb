import React from "react";
import HeaderLogo from "../HeaderLogo";
import StyledHeader from "./StyledHeader";
import HeaderContainer from "./HeaderContainer";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <HeaderLogo/>
            <HeaderContainer>
                <button type='button' className='header-profile-button'/>
                <button type='button' className='header-cart-button'/>
            </HeaderContainer>
        </StyledHeader>
    )
}

export default Header
