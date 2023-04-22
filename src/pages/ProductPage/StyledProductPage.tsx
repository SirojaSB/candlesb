import styled from "styled-components";
import {SectionContainer} from "../../components/SectionContainer";
import React from "react";

const StyledProductPageCont = styled(SectionContainer)`
  padding-bottom: 114px;
  padding-top: 47px;
  display: flex;
  justify-content: center;
`

const StyledProductPage: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledProductPageCont>
        {children}
    </StyledProductPageCont>
}

export default StyledProductPage
