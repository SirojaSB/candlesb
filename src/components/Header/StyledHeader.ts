import styled from "styled-components";

import {SectionContainer} from "../SectionContainer";
import profile from '../../assets/images/ProfileIcon.svg'
import cart from '../../assets/images/CartIcon.svg'

export const StyledHeader = styled(SectionContainer)`
  width: calc(100% - (165px * 2));
  margin: 20px auto 0;
  padding: 0 0 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E5E5E5;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 33px;
    height: 33px;
  }
  
  p {
    font-size: 16px;
    color: #56B280;
    font-weight: 700;
    margin-left: 3px;
  }
`

export const ProfileButton = styled.button`
  width: 34px;
  height: 34px;
  border: 0;
  background-color: transparent;
  background-image: url(${profile});
`

export const CartButton = styled(ProfileButton)`
  margin-left: 20px;
  width: 26px;
  height: 26px;
  background-image: url(${cart});
`
