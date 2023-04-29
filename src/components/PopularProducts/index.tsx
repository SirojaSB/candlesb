import React from "react";
import ProductCard from "../ProductCard";
import StyledProducts from "../Products/StyledProducts";
import ProductsContainer from "../Products/ProductsContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const PopularProducts: React.FC = () => {
    const {candles} = useSelector((state: RootState) => state.candles)

    return (
        <StyledProducts>
            <h3 className='title'>Из популярного</h3>
            <p className='subtitle'>Наши самые продаваемый позиции, которые могут вам понравиться</p>
            <ProductsContainer>
                {candles.filter((item) => item.rating === 1).map((item) => (
                    <ProductCard key={item.id} image={item.imageUrl} title={item.title} price={item.price} id={item.id}/>
                ))}
            </ProductsContainer>
        </StyledProducts>
    )
}

export default PopularProducts
