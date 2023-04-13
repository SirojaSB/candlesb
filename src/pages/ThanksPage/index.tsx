import React from "react";
import InfoButton from "../../components/InfoButton";
import styled from "styled-components";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import {PaymentStepContainer} from '../../components/PaymentStepContainer'
import circle from '../../assets/images/ThanksCircle.svg'

const StyledThanksPage = styled.div`
  display: flex;
  justify-content: space-between;
`

const ThanksInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  }

  .thanks-info-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.9px;
    margin-bottom: 16px;
  }

  .thanks-info-shipping {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #818181;
    margin-bottom: 40px;
  }
`

const ThanksPage: React.FC = () => {
    return (
        <StyledThanksPage>
            <PaymentStepContainer>
                <HeaderLogo/>
                <NavPath page='payment'/>
                <ThanksInfoContainer>
                    <img src={circle} alt="Иконка с галочкой"/>
                    <p className='thanks-info-title'>Оплата подтверждена</p>
                    <p className='thanks-info-shipping'>
                        Спасибо за покупку Candlesb. Природа благодарна вам. Теперь, когда ваш заказ подтвержден, он
                        будет готов к отправке через 2 дня. Пожалуйста, проверяйте свой почтовый ящик для проверки
                        актуальной информации о вашем заказе.
                    </p>
                    <InfoButton width='320px'>Вернуться к покупкам</InfoButton>
                </ThanksInfoContainer>
            </PaymentStepContainer>
            <TotalPricePaymentSection/>
        </StyledThanksPage>
    )
}

export default ThanksPage
