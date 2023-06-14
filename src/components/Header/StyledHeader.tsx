import styled from "styled-components";
import React from "react";

import {SectionContainer} from "../SectionContainer";

const StyledHeaderCont = styled(SectionContainer)`
  width: calc(100% - (165px * 2));
  margin: 0 auto;
  padding: 20px 0 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
`

const StyledHeader: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledHeaderCont>
            {children}
        </StyledHeaderCont>
}

export default StyledHeader
