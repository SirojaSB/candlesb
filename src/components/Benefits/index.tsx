import React from "react";
import {SectionContainer} from "../SectionContainer";
import image from '../../assets/images/CompImg.png'
import checkmarck from '../../assets/images/Checkmark.svg'
import styled from "styled-components";

const StyledBenefits = styled(SectionContainer)`
  display: flex;
  background-color: #F7F8FA;
  padding-top: 133px;
  padding-bottom: 209px;
  
  div {
    width: 540px;
    
    h3 {
      font-weight: 700;
      font-size: 40px;
      line-height: 46.6px;
      letter-spacing: -0.9px;
      margin-bottom: 15px;
    }
    
    .benefits-subtitle {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.8px;
      color: #56B280;
      margin-bottom: 38px;
    }
    
    ul {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      text-decoration: none;
      list-style: none;
      
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 28.8px;
        
        img {
          width: 14px;
          height: 14px;
          margin-right: 10px;
        }
        
        span {
          font-weight: 700;
        }
      }
    }
  }

  .comp-image {
    width: 540px;
    height: 377px;
    background-color: #fff;
    box-shadow: 0 4px 94px rgba(123, 123, 123, 0.35);
    margin: 81px 0 0 30px;
    border-radius: 5px;
  }
`

const Benefits: React.FC = () => {
    return (
        <StyledBenefits>
            <div>
                <h3>Чистый и ароматный соевый воск</h3>
                <p className='benefits-subtitle'>Сделано для вашего дома и вашего здоровья</p>
                <ul>
                    <li>
                        <p><img src={checkmarck} alt="Галочка"/><span>Экологичный:</span> Все перерабатываемые материалы, 0% выбросов CO2</p>
                    </li>
                    <li>
                        <p><img src={checkmarck} alt="Галочка"/><span>Гипоаллергенный:</span> на 100% натуральные и безопасные для человека ингредиенты</p>
                    </li>
                    <li>
                        <p><img src={checkmarck} alt="Галочка"/><span>Ручной работы:</span> Все свечи сделаны мастерски с любовью.</p>
                    </li>
                    <li>
                        <p><img src={checkmarck} alt="Галочка"/><span>Долгое горение:</span> Больше никаких отходов. Создано на долгие годы.</p>
                    </li>
                </ul>
            </div>
            <img className='comp-image' src={image} alt="Фото продукта"/>
        </StyledBenefits>
    )
}

export default Benefits
