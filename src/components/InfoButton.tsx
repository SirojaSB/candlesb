import styled from "styled-components";
import React from "react";

type InfoButtonProps = {
    width?: string;
    children?: string;
}

const StyledButton = styled.button<InfoButtonProps>`
  width: ${({width}) => width || '310px'};
  padding: 8px 44px;
  background-color: #56B280;
  border-radius: 4px;
  color: #fff;
  border: 0;
  font-size: 18px;
  line-height: 24.19px;
  font-weight: 500;
  cursor: pointer;
`

const InfoButton: React.FC<InfoButtonProps> = ({width, children}) => {
    return <StyledButton width={width}>
        {children}
    </StyledButton>
}

export default InfoButton
