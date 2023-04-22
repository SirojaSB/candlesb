import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";
import React from "react";

const StyledBenefitsCont = styled(SectionContainer)`
  display: flex;
  justify-content: space-between;
  background-color: #F7F8FA;
  padding-top: 133px;
  padding-bottom: 209px;
`

const StyledBenefits: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledBenefitsCont>
        {children}
    </StyledBenefitsCont>
}

export default StyledBenefits
