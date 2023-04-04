import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";
import background from '../../assets/images/BgImage.png'

export const StyledPromo = styled(SectionContainer)`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    width: 730px;
    margin: 180px 0;
    padding: 33px 96px 63px;
    background: rgba(247, 248, 250, 0.8);
    backdrop-filter: blur(12px);
    border-radius: 2px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1 {
      font-size: 40px;
      line-height: 57.6px;
      font-weight: 500;
      text-align: center;
    }
    
    p {
      margin-bottom: 45px;
      font-size: 18px;
      line-height: 25.6px;
      font-weight: 400;
      text-align: center;
    }
  }
`
