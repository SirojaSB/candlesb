import React from "react";

import Promo from "../../components/Promo";
import Products from "../../components/Products";
import Benefits from "../../components/Benefits";
import Testimonials from "../../components/Testimonials";
import PopularProducts from "../../components/PopularProducts";
import {useAppDispatch} from "../../redux/store";
import {fetchCandles} from "../../redux/slices/candle/slice";

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(fetchCandles())
    }, [])

    return (
        <main>
            <Promo/>
            <Products/>
            <Benefits/>
            <Testimonials/>
            <PopularProducts/>
        </main>
    )
}

export default MainPage
