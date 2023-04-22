import styled from "styled-components";
import React from "react";

const StyledDetailsPageCont = styled.div`
  display: flex;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.9px;
      
      input {
        border: 0.5px solid #898989;
        border-radius: 5px;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        padding: 7px 17px;
        margin-top: 12px;

        &:focus {
          border: 1px solid #56B280;
        }
      }
    }
    
    .contact-label-form {
      margin-bottom: 40px;
    }

    .shipping-label-form {
      margin-bottom: 60px;
    }
    
    .container-label-form {
      display: flex;
      justify-content: space-between;
    }
  }
  
  .details-page-buttons-container {
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
`

const StyledDetailsPage: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledDetailsPageCont>
        {children}
    </StyledDetailsPageCont>
}

export default StyledDetailsPage
