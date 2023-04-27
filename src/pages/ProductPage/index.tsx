import React from "react";

import mainimg from '../../assets/images/Product1.png'
import InfoButton from "../../components/InfoButton";
import cartimg from '../../assets/images/CartIcon.svg'
import ProductCounter from "../../components/ProdictCounter";
import StyledProductPage from "./StyledProductPage";
import ShowingContainer from "./ShowingContainer";
import WithCartInfoContainer from "./WithCartInfoContainer";

const ProductPage: React.FC = () => {
    return (
        <StyledProductPage>
            <ShowingContainer image={mainimg}>
                <div/>
                <p className='product-page-info-text'>Cделано вручную из натурального соевого воска <br/> Candlesb
                    создан для украшения вашей повседневной жизни.</p>
                <p className='product-page-shipping-text'>🚚 FREE SHIPPING</p>
            </ShowingContainer>
            <WithCartInfoContainer>
                <h3>Spiced Mint Candlesb®</h3>
                <div className='product-page-product-info-container'>
                    <div>
                        <p className='product-page-price'>$ 9.99</p>
                        <p className='product-page-button-label'>Quantity</p>
                        <ProductCounter />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p><span>Wax: </span>Top grade Soy wax that delivers a smoke less, consistent burn</p>
                            </li>
                            <li>
                                <p><span>Fragrance: </span>Premium quality ingredients with natural essential oils</p>
                            </li>
                            <li>
                                <p><span>Burning Time: </span>70-75 hours</p>
                            </li>
                            <li>
                                <p><span>Dimension: </span>10cm x 5cm </p>
                            </li>
                            <li>
                                <p><span>Weight: </span>400g</p>
                            </li>
                        </ul>
                        <InfoButton width='350px'>
                            <img src={cartimg} alt="Иконка корзины"/>
                            + Add to cart
                        </InfoButton>
                    </div>
                </div>
            </WithCartInfoContainer>
        </StyledProductPage>
    )
}

export default ProductPage
