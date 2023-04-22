import styled from "styled-components";
import {InnerContainer} from "../InnerContainer";
import React from "react";

const StyledCompImageContainer = styled(InnerContainer)`
  img {
    width: 540px;
    height: 377px;
    background-color: #fff;
    box-shadow: 0 4px 94px rgba(123, 123, 123, 0.35);
    margin-top: 81px;
    border-radius: 5px;
  }
`

const CompImageContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledCompImageContainer>
        {children}
    </StyledCompImageContainer>
}

export default CompImageContainer
