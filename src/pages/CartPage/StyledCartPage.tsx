import styled from "styled-components";
import {SectionContainer} from "../../components/SectionContainer";
import React from "react";

const StyledCartPageCont = styled(SectionContainer)`
  padding-top: 47px;
  padding-bottom: 147px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .cart-page-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 17px;
  }

  .cart-page-back-link {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    text-decoration-line: underline;
    color: #56B280;
    margin-bottom: 60px;
  }
  
  .cart-page-total-section {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    &-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 70px;
      
      div {
        display: flex;
        margin-bottom: 9px;
        
        p {
          font-weight: 700;
          font-size: 20px;
          line-height: 26px;
          letter-spacing: -0.9px;
          
          &:last-of-type {
            margin-left: 40px;
          }
        }
      }
      
      &-caption {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        text-align: right;
        letter-spacing: -0.9px;
        color: #9E9E9E;
      }
    }
  }
`

const StyledCartPage: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledCartPageCont>
        {children}
    </StyledCartPageCont>
}

export default StyledCartPage
