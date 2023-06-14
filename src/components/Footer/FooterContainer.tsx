import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";
import React from "react";

const StyledFooterContainer = styled.footer`
  padding: 60px 165px 80px;
  background-color: #272727;
  position: sticky;
  top: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 27.6px;
    }

    ul {
      display: flex;
      text-decoration: none;
      list-style: none;

      li {
        &:last-of-type {
          margin-left: 40px;
        }

        a {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          line-height: 27.6px;
          text-decoration: none;
        }
      }
    }
  }
`

const FooterContainer: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <StyledFooterContainer>
        {children}
    </StyledFooterContainer>
}

export default FooterContainer
