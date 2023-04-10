import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/AuthenticationPage";

const App: React.FC = () => {
    return (
        <div>
            {/*<Header/>*/}
            {/*<MainPage />*/}
            {/*<ProductPage/>*/}
            {/*<CartPage/>*/}
            <DetailsPage/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
