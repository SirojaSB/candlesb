import React from "react";

import Promo from "../../components/Promo";
import Products from "../../components/Products";
import Benefits from "../../components/Benefits";
import Testimonials from "../../components/Testimonials";
import PopularProducts from "../../components/PopularProducts";

const MainPage: React.FC = () => {
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
