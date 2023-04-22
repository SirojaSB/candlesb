import React from "react";
import InfoButton from "../../components/InfoButton";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import { PaymentStepContainer } from '../../components/PaymentStepContainer'
import StyledDetailsPage from "./StyledDetailsPage";



const DetailsPage: React.FC = () => {
    return (
        <StyledDetailsPage>
            <PaymentStepContainer>
                <HeaderLogo/>
                <NavPath page='details'/>
                <form>
                    <label className='contact-label-form'>
                        Как связаться с вами
                        <input type="text" placeholder='Электронная почта или номер телефона'/>
                    </label>
                    <label className='shipping-label-form'>
                        Детали доставки
                        <div className='container-label-form'>
                            <input type="text" placeholder='Имя'/>
                            <input type="text" placeholder='Фамилия'/>
                        </div>
                        <input type="text" placeholder='Адрес'/>
                        <div className='container-label-form'>
                            <input type="text" placeholder='Город'/>
                            <input type="text" placeholder='Индекс'/>
                        </div>
                        <input type="text" placeholder='Страна'/>
                    </label>
                    <div className='details-page-buttons-container'>
                        <button className='details-page-buttons-container-back'>Назад</button>
                        <InfoButton type='submit' width='222px'>Далее</InfoButton>
                    </div>
                </form>
            </PaymentStepContainer>
            <TotalPricePaymentSection />
        </StyledDetailsPage>
    )
}

export default DetailsPage
