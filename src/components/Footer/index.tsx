import React from "react";
import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";

const StyledFooter = styled(SectionContainer)`
  background-color: #272727;
  padding-top: 60px;
  padding-bottom: 80px;

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

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <div className='container'>
                <p>Candlesb &#xa9; 2023</p>
                <nav>
                    <ul>
                        <li>
                            <a className='footer__link-item' href='https://t.me/s_venzeles' target='_blank'
                               rel="noreferrer">Telegram</a>
                        </li>
                        <li>
                            <a className='footer__link-item' href='https://github.com/SirojaSB' target='_blank'
                               rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledFooter>
    )
}

export default Footer
