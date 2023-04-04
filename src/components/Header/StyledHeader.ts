import styled from "styled-components";

import {SectionContainer} from "../SectionContainer";
import profile from '../../assets/images/ProfileIcon.svg'
import cart from '../../assets/images/CartIcon.svg'

export const StyledHeader = styled(SectionContainer)`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
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
