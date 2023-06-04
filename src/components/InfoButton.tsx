import styled from "styled-components";
import React from "react";

type InfoButtonProps = {
    width?: string;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClickButton?: () => void;
    isValid?: boolean;
}

const StyledButton = styled.button<InfoButtonProps>`
  width: ${({width}) => width || '310px'};
  height: fit-content;
  padding: 8px 44px;
  background-color: ${({isValid}) => isValid ? '#56B280' : '#b6babf'};
  border-radius: 4px;
  color: ${({isValid}) => isValid ? '#fff' : '#0b254b'};
  border: 0;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  cursor: ${({isValid}) => isValid ? 'pointer' : 'default'};
  display: flex;
  align-items: center;
  justify-content: center;
`



const InfoButton: React.FC<InfoButtonProps> = ({type, width, onClickButton, isValid, children}) => {
    console.log(isValid === undefined? false : !isValid)

    return <StyledButton type={type ? type : 'button'} width={width} onClick={onClickButton} disabled={isValid === undefined? false : !isValid} isValid={isValid === undefined? true : isValid}>
        {children}
    </StyledButton>
}

export default InfoButton
