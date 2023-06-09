import styled from "styled-components";
import {SectionContainer} from "../../components/SectionContainer";
import React from "react";

const StyledOrdersPageCont = styled(SectionContainer)`
  padding-top: 47px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .order-page-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 17px;
  }

  .order-page-empty {
    font-weight: 400;
    font-size: 18px;
    line-height: 25.6px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 350px;
    color: rgba(11, 37, 75, .6);
  }
  
  .orders-page-back-link {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    text-decoration-line: underline;
    color: #56B280;
    margin-bottom: 60px;
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(3, 255px);
    gap: 60px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

const StyledOrdersPage: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledOrdersPageCont>
        {children}
    </StyledOrdersPageCont>
}

export default StyledOrdersPage
