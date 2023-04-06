import React from "react";
import styled from "styled-components";
import {SectionContainer} from "../../components/SectionContainer";
import mainimg from '../../assets/images/Product1.svg'
import {InnerContainer} from "../../components/InnerContainer";
import InfoButton from "../../components/InfoButton";
import cartimg from '../../assets/images/CartIcon.svg'
import ProductCounter from "../../components/ProdictCounter";

const StyledProductPage = styled(SectionContainer)`
  padding-bottom: 114px;
  padding-top: 47px;
  display: flex;
  justify-content: center;
`

const ShowingContainer = styled(InnerContainer)<{ image: string }>`
  margin-right: 30px;

  div {
    width: 100%;
    height: 433px;
    background-color: #F7F8FA;
    background-image: url(${({image}) => image || ''});
    background-size: cover;
  }

  .product-page-info-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    margin-top: 17px;
  }

  .product-page-shipping-text {
    margin-top: 30px;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    color: #56B280;
  }
`

const WithCartInfoContainer = styled(InnerContainer)`
  h3 {
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    letter-spacing: -0.9px;
  }

  .product-page-product-info-container {
    display: flex;
    justify-content: space-between;

    .product-page-price {
      font-weight: 900;
      font-size: 26px;
      line-height: 58px;
      letter-spacing: -0.9px;
      color: #56B280;
      margin-bottom: 23px;
    }

    .product-page-button-label {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.9px;
      margin-bottom: 6px;
    }

    ul {
      width: 350px;
      border: 1px solid #E6E6E6;
      list-style: none;
      border-radius: 5px;
      padding: 22px;
      margin-bottom: 67px;
      
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #849A8E;
      }
    }

    img {
      margin-right: 10px;
    }
  }
`



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
