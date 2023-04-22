import styled from "styled-components";
import React from "react";

const StyledCellTitle = styled.p<{size?: string}>`
  width: ${({size}) => size || '100px'};
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.9px;
`

const CellTitle: React.FC<{children: React.ReactNode, size?: string}> = ({children, size}) => {
    return <StyledCellTitle size={size}>
        {children}
    </StyledCellTitle>
}

export default CellTitle
