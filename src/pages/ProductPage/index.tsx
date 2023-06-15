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
import {setSelectedCandle} from "../../redux/slices/candle/slice";
import axios from "axios";
import {createCartItem} from "../../redux/slices/cart/slice";
import {CandleItem} from "../../redux/slices/candle/types";

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

    const addProductToCart = () => {
        dispatch(createCartItem({
            id: Number(id),
            imageUrl: selectedCandle.imageUrl,
            title: selectedCandle.title,
            price: selectedCandle.price,
            count: countProduct,
            totalPrice: selectedCandle.price * countProduct,
        }))
    }

    return (
        <StyledProductPage>
            <ShowingContainer image={selectedCandle.imageUrl}>
                <div/>
                <p className='product-page-info-text'>Cделано вручную из натурального соевого воска <br/> Candlesb
                    создан для украшения вашей повседневной жизни.</p>
                <p className='product-page-shipping-text'>🚚 БЕСПЛАТНАЯ ДОСТАВКА</p>
            </ShowingContainer>
            <WithCartInfoContainer>
                <h3>{selectedCandle.title}</h3>
                <div className='product-page-product-info-container'>
                    <div>
                        <p className='product-page-price'>{selectedCandle.price} ₽</p>
                        <p className='product-page-button-label'>Количество</p>
                        <ProductCounter
                            countProduct={countProduct}
                            increaseCounterProduct={() => setCountProduct((prev) => prev + 1)}
                            decreaseCounterProduct={() => setCountProduct((prev) => prev > 1 ? prev - 1 : 1)}
                        />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p><span>Воск: </span>Соевый воск высшего сорта, обеспечивающий равномерное горение без дыма.</p>
                            </li>
                            <li>
                                <p><span>Аромат: </span>Ингредиенты высшего качества с натуральными эфирными маслами.</p>
                            </li>
                            <li>
                                <p><span>Время горения: </span>70-75 часов</p>
                            </li>
                            <li>
                                <p><span>Размер: </span>10см x 5см </p>
                            </li>
                            <li>
                                <p><span>Вес: </span>400г</p>
                            </li>
                        </ul>
                        <InfoButton width='350px' onClickButton={addProductToCart}>
                            <img src={cartimg} alt="Иконка корзины"/>
                            + Добавить в корзину
                        </InfoButton>
                    </div>
                </div>
            </WithCartInfoContainer>
        </StyledProductPage>
    )
}

export default ProductPage
