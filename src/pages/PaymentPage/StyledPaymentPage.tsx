import styled from "styled-components";
import React from "react";

const StyledPaymentPageCont = styled.div`
  display: flex;
  justify-content: space-evenly;

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 0.5px solid #898989;
      border-radius: 5px;
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;
      padding: 7px 10px;
      margin-top: 12px;

      &:focus {
        border: 1px solid #56B280;
      }
    }

    .error-input-form {
      border: 0.5px solid #ff6459;

      &:focus {
        border: 1px solid #ff6459;
      }
    }

    .payment-label-form {
      margin: 23px 0 20px;
      display: flex;
      flex-direction: column;
      padding: 19px;
      border: 1px solid #E5E5E5;
      border-radius: 10px;
    }


    .container-label-form {
      display: flex;
      justify-content: space-between;
    }

    .payment-page-checkbox-label {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      display: flex;
      position: relative;
      margin-bottom: 42px;
    }

    .payment-page-checkbox {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);

      &-visible {
        width: 18px;
        height: 18px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #56B280;
        background-color: transparent;
        position: relative;
        display: block;
        cursor: pointer;

        &-active::after {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #56B280;
          position: absolute;
          top: 3px;
          left: 3px;
        }
      }
    }

    .payment-page-buttons-container {
      display: flex;
      justify-content: space-between;

      &-back {
        border: none;
        background-color: transparent;
        text-decoration: underline;
        color: #56B280;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.9px;
      }
    }
  }
`

const StyledPaymentPage: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledPaymentPageCont>
        {children}
    </StyledPaymentPageCont>
}

export default StyledPaymentPage
