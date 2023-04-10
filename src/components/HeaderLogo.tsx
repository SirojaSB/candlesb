import styled from "styled-components";
import React from "react";
import logo from "../assets/images/Logo.svg";

const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;

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
`

const HeaderLogo: React.FC = () => {
    return <StyledHeaderLogo>
        <img src={logo} alt="Лого"/>
        <p>Candlesb</p>
    </StyledHeaderLogo>
}

export default HeaderLogo
