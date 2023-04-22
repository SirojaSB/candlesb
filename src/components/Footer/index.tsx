import React from "react";
import FooterContainer from "./FooterContainer";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
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
        </FooterContainer>
    )
}

export default Footer
