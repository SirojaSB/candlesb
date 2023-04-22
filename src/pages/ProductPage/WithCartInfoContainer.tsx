import styled from "styled-components";
import {InnerContainer} from "../../components/InnerContainer";
import React from "react";

const StyledWithCartInfoContainer = styled(InnerContainer)`
  h3 {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    letter-spacing: -0.9px;
  }

  .product-page-product-info-container {
    display: flex;
    justify-content: space-between;

    .product-page-price {
      font-weight: 900;
      font-size: 26px;
      line-height: 58px;
      letter-spacing: -0.9px;
      color: #56B280;
      margin-bottom: 23px;
    }

    .product-page-button-label {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.9px;
      margin-bottom: 6px;
    }

    ul {
      width: 350px;
      border: 1px solid #E6E6E6;
      list-style: none;
      border-radius: 5px;
      padding: 22px;
      margin-bottom: 67px;
      
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #849A8E;
      }
    }

    img {
      margin-right: 10px;
    }
  }
`

const WithCartInfoContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledWithCartInfoContainer>
        {children}
    </StyledWithCartInfoContainer>
}

export default WithCartInfoContainer
