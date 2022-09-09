import { Routes, Route } from 'react-router-dom';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';

function App() {
    return (
        <>
                <Navbar />
                <FloatingCart />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/produits" element={<Products />} />
                <Route exact path="/produits/:id" element={<ProductShowcase />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/shoppingCart" element={<ShoppingCart />} />
            </Routes>
        </>
    );
}

export default App;
