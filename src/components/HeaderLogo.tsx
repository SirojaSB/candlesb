import styled from "styled-components";
import React from "react";
import logo from "../assets/images/Logo.svg";
import {Link} from "react-router-dom";

const StyledHeaderLogo = styled.div`
  .header-logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      width: 33px;
      height: 33px;
    }

    p {
      font-size: 16px;
      color: #56B280;
      font-weight: 700;
      margin-left: 3px;
    }
  }
`

const HeaderLogo: React.FC = () => {


    return <StyledHeaderLogo>
        <Link to='/' className='header-logo-link'>
            <img src={logo} alt="Лого"/>
            <p>Candlesb</p>
        </Link>
    </StyledHeaderLogo>
}

export default HeaderLogo
