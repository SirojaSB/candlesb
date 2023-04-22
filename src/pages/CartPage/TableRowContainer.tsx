import styled from "styled-components";
import React from "react";

const StyledTableRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const TableRowContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledTableRowContainer>
        {children}
    </StyledTableRowContainer>
}

export default TableRowContainer
