import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import Cart from './components/cart.jsx';
import Checkout from './components/Checkout';
import useCart from './hooks/useCart'; 
import useProducts from './hooks/useProducts'; 
import useCheckout from './hooks/useCheckout';  
import './styles/App.css';

const App = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, updateQuantity } = useCart();  
  const { products, filteredProducts, handleSearch ,fetchProducts} = useProducts(); 

  const { isCheckingOut, handleCheckout } = useCheckout(cartItems, clearCart,fetchProducts);  

  return (
    <Router>
      <div className="app-container">
        <Header cartItems={cartItems} onSearch={handleSearch} />
        
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ProductList products={filteredProducts.length ? filteredProducts : products} addToCart={addToCart} cartItems={cartItems} />}
            />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} onCheckout={handleCheckout} updateQuantity={updateQuantity} />}
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
