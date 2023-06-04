import React, {FormEvent, FormEventHandler} from "react";
import InfoButton from "../../components/InfoButton";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import { PaymentStepContainer } from '../../components/PaymentStepContainer'
import StyledDetailsPage from "./StyledDetailsPage";
import useFormWithValidation from "../../utils/useFormWithValidation";
import {useDispatch} from "react-redux";
import {createOrderItem} from "../../redux/slices/ordersSlice";
import {useNavigate} from "react-router-dom";

const DetailsPage: React.FC = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {values, errors, isValid, handleChange} = useFormWithValidation(
        {
            contacts: '',
            name: '',
            surname: '',
            address: '',
            city: '',
            index: '',
            country: '',
        })

    const toNextStep = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(createOrderItem({
            contacts: values.contacts,
            name: values.name,
            surname: values.surname,
            address: values.address,
            city: values.city,
            index: values.index,
            country: values.country,
        }))

        navigate('/cart/payment')
    }

    return (
        <StyledDetailsPage>
            <PaymentStepContainer>
                <HeaderLogo/>
                <NavPath page='details'/>
                <form onSubmit={toNextStep}>
                    <label className='contact-label-form'>
                        Как связаться с вами
                        <input className={errors.contacts ? 'error-input-form' : ''}
                               name='contacts'
                               type="text"
                               value={values.contacts}
                               onChange={handleChange}
                               placeholder='Электронная почта'
                               pattern='[A-z0-9_.-]{1,}@[A-z0-9_.-]{1,}[.][A-z]{2,6}'
                               required/>
                        <span>{errors.contacts}</span>
                    </label>
                    <label className='shipping-label-form'>
                        Детали доставки
                        <div className='container-label-form'>
                            <input className={errors.name ? 'error-input-form' : ''}
                                   name='name'
                                   type="text"
                                   value={values.name}
                                   onChange={handleChange}
                                   placeholder='Имя'
                                   required/>
                            <input className={errors.surname ? 'error-input-form' : ''}
                                   name='surname'
                                   type="text"
                                   value={values.surname}
                                   onChange={handleChange}
                                   placeholder='Фамилия'
                                   required/>
                        </div>
                        <input className={errors.address ? 'error-input-form' : ''}
                               name='address'
                               type="text"
                               value={values.address}
                               onChange={handleChange}
                               placeholder='Адрес'
                               required/>
                        <div className='container-label-form'>
                            <input className={errors.city ? 'error-input-form' : ''}
                                   name='city'
                                   type="text"
                                   value={values.city}
                                   onChange={handleChange}
                                   placeholder='Город'
                                   required/>
                            <input className={errors.index ? 'error-input-form' : ''}
                                   name='index'
                                   type="text"
                                   value={values.index}
                                   onChange={handleChange}
                                   placeholder='Индекс'
                                   required/>
                        </div>
                        <input className={errors.country ? 'error-input-form' : ''}
                               name='country'
                               type="text"
                               value={values.country}
                               onChange={handleChange}
                               placeholder='Страна'
                               required/>
                    </label>
                    <div className='details-page-buttons-container'>
                        <button className='details-page-buttons-container-back' onClick={() => navigate(-1)}>Назад</button>
                        <InfoButton type='submit' width='222px' isValid={isValid}>Далее</InfoButton>
                    </div>
                </form>
            </PaymentStepContainer>
            <TotalPricePaymentSection />
        </StyledDetailsPage>
    )
}

export default DetailsPage
