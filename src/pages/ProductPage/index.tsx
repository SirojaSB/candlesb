import React, {useEffect} from "react";

import InfoButton from "../../components/InfoButton";
import cartimg from '../../assets/images/CartIcon.svg'
import ProductCounter from "../../components/ProductCounter";
import StyledProductPage from "./StyledProductPage";
import ShowingContainer from "./ShowingContainer";
import WithCartInfoContainer from "./WithCartInfoContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {useNavigate, useParams} from "react-router-dom";
import {setSelectedCandle} from "../../redux/slices/candleSlice";
import axios from "axios";

type CandleItem = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    rating: number
}

const ProductPage: React.FC = () => {
    const [countProduct, setCountProduct] = React.useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {id} = useParams()

    const {selectedCandle} = useSelector((state: RootState) => state.candles)

    useEffect(() => {
        async function getCandle() {
            try {
                const {data} = await axios.get<CandleItem[]>('https://63f20e814f17278c9a1f42b0.mockapi.io/candles');
                const candle = data.find((item) => item.id === Number(id))
                if (candle) {
                    dispatch(setSelectedCandle({
                        imageUrl: candle.imageUrl,
                        title: candle.title,
                        price: candle.price,
                    }))
                } else {
                    throw new Error()
                }
            } catch (error) {
                alert('Ошибка при получении свечи!');
                navigate('/');
            }
        }

        getCandle()
    }, [])

    return (
        <StyledProductPage>
            <ShowingContainer image={selectedCandle.imageUrl}>
                <div/>
                <p className='product-page-info-text'>Cделано вручную из натурального соевого воска <br/> Candlesb
                    создан для украшения вашей повседневной жизни.</p>
                <p className='product-page-shipping-text'>🚚 FREE SHIPPING</p>
            </ShowingContainer>
            <WithCartInfoContainer>
                <h3>{selectedCandle.title}</h3>
                <div className='product-page-product-info-container'>
                    <div>
                        <p className='product-page-price'>{selectedCandle.price} ₽</p>
                        <p className='product-page-button-label'>Quantity</p>
                        <ProductCounter
                            countProduct={countProduct}
                            increaseCounterProduct={() => setCountProduct((prev) => prev + 1)}
                            decreaseCounterProduct={() => setCountProduct((prev) => prev > 1 ? prev - 1 : 1)}
                        />
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
