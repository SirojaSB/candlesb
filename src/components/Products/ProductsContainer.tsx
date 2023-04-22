import React from "react";
import styled from "styled-components";

const StyledProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 255px);
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const ProductsContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledProductsContainer>
        {children}
    </StyledProductsContainer>
}

export default ProductsContainer
