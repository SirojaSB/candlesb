import React from "react";
import InfoButton from "../../components/InfoButton";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import {PaymentStepContainer} from '../../components/PaymentStepContainer'
import circle from '../../assets/images/ThanksCircle.svg'
import StyledThanksPage from "./StyledThanksPage";
import ThanksInfoContainer from "./ThanksInfoContainer";

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
