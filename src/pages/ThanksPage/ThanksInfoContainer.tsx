import styled from "styled-components";
import React from "react";

const StyledThanksInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  }

  .thanks-info-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 16px;
  }

  .thanks-info-shipping {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #818181;
    margin-bottom: 40px;
  }
`

const ThanksInfoContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledThanksInfoContainer>
        {children}
    </StyledThanksInfoContainer>
}

export default ThanksInfoContainer
