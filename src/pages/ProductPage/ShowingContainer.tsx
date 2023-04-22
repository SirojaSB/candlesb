import styled from "styled-components";
import {InnerContainer} from "../../components/InnerContainer";
import React from "react";

const StyledShowingContainer = styled(InnerContainer)<{ image: string }>`
  margin-right: 30px;

  div {
    width: 100%;
    height: 433px;
    background-color: #F7F8FA;
    background-image: url(${({image}) => image || ''});
    background-size: cover;
  }

  .product-page-info-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-top: 17px;
  }

  .product-page-shipping-text {
    margin-top: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    color: #56B280;
  }
`

const ShowingContainer: React.FC<{children: React.ReactNode, image: string}> = ({children, image}) => {
    return <StyledShowingContainer image={image}>
        {children}
    </StyledShowingContainer>
}

export default ShowingContainer
