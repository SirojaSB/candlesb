import styled from "styled-components";
import React from "react";

const StyledProductCounter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75px;
  height: 30px;
  border: 1px solid #56B280;
  border-radius: 5px;
  
  button {
    border: none;
    color: #56B280;
    background-color: transparent;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    cursor: pointer;
  }
  
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.9px;
  }
`

const ProductCounter: React.FC = () => {
    return (
        <StyledProductCounter>
            <button>+</button>
            <p>1</p>
            <button>-</button>
        </StyledProductCounter>
    )
}

export default ProductCounter
