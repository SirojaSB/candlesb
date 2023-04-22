import styled from "styled-components";
import {InnerContainer} from "../InnerContainer";
import React from "react";

const StyledBenefitsContainer = styled(InnerContainer)`
  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 46.6px;
    letter-spacing: -0.9px;
    margin-bottom: 15px;
  }

  .benefits-subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.8px;
    color: #56B280;
    margin-bottom: 38px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    text-decoration: none;
    list-style: none;

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 28.8px;

      img {
        width: 14px;
        height: 14px;
        margin-right: 10px;
      }

      span {
        font-weight: 700;
      }
    }
  }
`

const BenefitsContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledBenefitsContainer>
        {children}
    </StyledBenefitsContainer>
}

export default BenefitsContainer
