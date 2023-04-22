import React from "react";
import InfoButton from "../../components/InfoButton";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import {PaymentStepContainer} from '../../components/PaymentStepContainer'
import StyledPaymentPage from "./StyledPaymentPage";

const PaymentPage: React.FC = () => {
    return (
        <StyledPaymentPage>
            <PaymentStepContainer>
                <HeaderLogo/>
                <NavPath page='payment'/>
                <form>
                    Способ оплаты
                    <label className='payment-label-form'>
                        Оплата картой
                        <input type="text" placeholder='Номер карты'/>
                        <input type="text" placeholder='Имя Фамилия'/>
                        <div className='container-label-form'>
                            <input type="text" placeholder='ММ/ГГ'/>
                            <input type="text" placeholder='CVV'/>
                        </div>
                    </label>
                    <label className='payment-page-checkbox-label'>
                        <input className='payment-page-checkbox' type='checkbox'/>
                        <span className='payment-page-checkbox-visible payment-page-checkbox-visible-active'/>
                        Оплата при доставке
                    </label>
                    <div className='payment-page-buttons-container'>
                        <button className='payment-page-buttons-container-back'>Назад</button>
                        <InfoButton type='submit' width='166px'>Оплатить</InfoButton>
                    </div>
                </form>
            </PaymentStepContainer>
            <TotalPricePaymentSection/>
        </StyledPaymentPage>
    )
}

export default PaymentPage
