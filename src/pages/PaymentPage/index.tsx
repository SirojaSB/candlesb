import React from "react";
import InfoButton from "../../components/InfoButton";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import {PaymentStepContainer} from '../../components/PaymentStepContainer'
import StyledPaymentPage from "./StyledPaymentPage";
import useFormWithValidation from "../../utils/useFormWithValidation";

const PaymentPage: React.FC = () => {
    const [isPaymentOnDelivery, setIsPaymentOnDelivery] = React.useState(false)

    const {values, errors, isValid, handleChange, resetForm} = useFormWithValidation(
        {
            cardNumber: '',
            nameSur: '',
            date: '',
            cvv: ''
        })

    const togglePaymentCheckbox = () => {
        resetForm({
            cardNumber: '',
            nameSur: '',
            date: '',
            cvv: ''
        })
        setIsPaymentOnDelivery(!isPaymentOnDelivery)
    }

    return (
        <StyledPaymentPage>
            <PaymentStepContainer>
                <HeaderLogo/>
                <NavPath page='payment'/>
                <form>
                    Способ оплаты
                    <label className='payment-label-form'>
                        Оплата картой
                        <input name='cardNumber'
                               value={values.cardNumber}
                               onChange={handleChange}
                               className={errors.cardNumber ? 'error-input-form' : ''}
                               type="text"
                               placeholder='Номер карты'
                               disabled={isPaymentOnDelivery}
                               required/>
                        <input name='nameSur'
                               value={values.nameSur}
                               onChange={handleChange}
                               className={errors.nameSur ? 'error-input-form' : ''}
                               type="text"
                               placeholder='Имя Фамилия'
                               disabled={isPaymentOnDelivery}
                               required/>
                        <div className='container-label-form'>
                            <input name='date'
                                   value={values.date}
                                   onChange={handleChange}
                                   className={errors.date ? 'error-input-form' : ''}
                                   type="text"
                                   placeholder='ММ/ГГ'
                                   disabled={isPaymentOnDelivery}
                                   required/>
                            <input name='cvv'
                                   value={values.cvv}
                                   onChange={handleChange}
                                   className={errors.cvv ? 'error-input-form' : ''}
                                   type="text"
                                   placeholder='CVV'
                                   disabled={isPaymentOnDelivery}
                                   required/>
                        </div>
                    </label>
                    <label className='payment-page-checkbox-label'>
                        <input className='payment-page-checkbox' type='checkbox'/>
                        <span
                            className={`payment-page-checkbox-visible ${isPaymentOnDelivery ? 'payment-page-checkbox-visible-active' : ''}`}
                            onClick={togglePaymentCheckbox}/>
                        Оплата при доставке
                    </label>
                    <div className='payment-page-buttons-container'>
                        <button className='payment-page-buttons-container-back'>Назад</button>
                        <InfoButton type='submit' width='166px' isValid={isPaymentOnDelivery || isValid}>Готово</InfoButton>
                    </div>
                </form>
            </PaymentStepContainer>
            <TotalPricePaymentSection/>
        </StyledPaymentPage>
    )
}

export default PaymentPage
