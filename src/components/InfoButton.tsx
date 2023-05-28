import styled from "styled-components";
import React from "react";

type InfoButtonProps = {
    width?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClickButton?: () => void;
}

const StyledButton = styled.button<InfoButtonProps>`
  width: ${({width}) => width || '310px'};
  height: fit-content;
  padding: 8px 44px;
  background-color: #56B280;
  border-radius: 4px;
  color: #fff;
  border: 0;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`



const InfoButton: React.FC<InfoButtonProps> = ({type, width, onClickButton, children}) => {
    return <StyledButton type={type ? type : 'button'} width={width} onClick={onClickButton}>
        {children}
    </StyledButton>
}

export default InfoButton
