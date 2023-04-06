import React from 'react';

import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            {/*<MainPage />*/}
            {/*<ProductPage/>*/}
            <CartPage/>
            <Footer/>
        </div>
    );
}

export default App;
