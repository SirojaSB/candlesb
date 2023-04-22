import styled from "styled-components";
import React from "react";

const StyledThanksPageCont = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledThanksPage: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledThanksPageCont>
        {children}
    </StyledThanksPageCont>
}

export default StyledThanksPage
