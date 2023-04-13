import React from "react";
import InfoButton from "../../components/InfoButton";
import styled from "styled-components";
import NavPath from "../../components/NavPath";
import HeaderLogo from "../../components/HeaderLogo";
import TotalPricePaymentSection from "../../components/TotalPricePaymentSection";
import { PaymentStepContainer } from '../../components/PaymentStepContainer'

const StyledDetailsPage = styled.div`
  display: flex;
  justify-content: space-between;

  form {
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.9px;
      
      input {
        border: 0.5px solid #898989;
        border-radius: 5px;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        padding: 7px 17px;
        margin-top: 12px;

        &:focus {
          border: 1px solid #56B280;
        }
      }
    }
    
    .contact-label-form {
      margin-bottom: 40px;
    }

    .shipping-label-form {
      margin-bottom: 60px;
    }
    
    .container-label-form {
      display: flex;
      justify-content: space-between;
    }
  }
  
  .details-page-buttons-container {
    display: flex;
    justify-content: space-between;
    
    &-back {
      border: none;
      background-color: transparent;
      text-decoration: underline;
      color: #56B280;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.9px;
    }
  }
`

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
