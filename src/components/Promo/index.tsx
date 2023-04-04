import React from "react";
import {StyledPromo} from "./StyledPromo";
import InfoButton from "../InfoButton";

const Promo: React.FC = () => {
    return (
        <StyledPromo>
            <div>
                <h1>🌱<br/>Натуральные свечи</h1>
                <p>Все сделано вручную из натурального соевого воска, Candlesb станет вашим компаньоном в этом поиске.</p>
                <InfoButton>К нашей коллекции</InfoButton>
            </div>
        </StyledPromo>
    )
}

export default Promo
