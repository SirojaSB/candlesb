import React from "react";
import ProductCard from "../ProductCard";
import ProductsContainer from "./ProductsContainer";
import StyledProducts from "./StyledProducts";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


const Products: React.FC = () => {
    const {candles} = useSelector((state: RootState) => state.candles)

    return (
        <StyledProducts id='products'>
            <h3 className='title'>Наша коллекция</h3>
            <p className='subtitle'>Закажите для себя или для своих близких</p>
            <ProductsContainer>
                {candles.map((item) => (
                    <ProductCard key={item.id} image={item.imageUrl} title={item.title} price={item.price} id={item.id}/>
                ))}
            </ProductsContainer>
        </StyledProducts>
    )
}

export default Products
