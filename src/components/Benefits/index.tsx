import React from "react";
import image from '../../assets/images/CompImg.png'
import checkmarck from '../../assets/images/Checkmark.svg'
import StyledBenefits from "./StyledBenefits";
import BenefitsContainer from "./BenefitsContainer";
import CompImageContainer from "./CopmImageContainer";

const Benefits: React.FC = () => {
    return (
        <StyledBenefits>
            <BenefitsContainer>
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
            </BenefitsContainer>
            <CompImageContainer>
                <img src={image} alt="Фото продукта"/>
            </CompImageContainer>
        </StyledBenefits>
    )
}

export default Benefits
