import React from "react";
import HeaderLogo from "../HeaderLogo";
import StyledHeader from "./StyledHeader";
import HeaderContainer from "./HeaderContainer";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <HeaderLogo/>
            <HeaderContainer>
                <button type='button' className='header-profile-button'/>
                <Link to='/cart' className='header-cart-button'/>
            </HeaderContainer>
        </StyledHeader>
    )
}

export default Header
