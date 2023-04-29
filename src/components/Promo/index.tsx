import React from "react";
import InfoButton from "../InfoButton";
import StyledPromo from "./StyledPromo";

const Promo: React.FC = () => {
    return (
        <StyledPromo>
            <div>
                <h1>🌱<br/>Натуральные свечи</h1>
                <p>Все сделано вручную из натурального соевого воска, Candlesb станет вашим компаньоном в поиске аромата для вашего дома.</p>
                <InfoButton>
                    <a href='#products'>
                        К нашей коллекции
                    </a>
                </InfoButton>
            </div>
        </StyledPromo>
    )
}

export default Promo
