import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart, onCheckout, updateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-container">
      <div className='car-list-title'>
        <h2><i className='bx bxs-cart'></i> Tu Carrito</h2>
      </div>
      <div className='cart-scroll'>
        {cartItems.length === 0 ? (
          <div className='cart-list-empty'>
            <p>No hay productos en el carrito. <i className='bx bx-tired'></i></p>
          </div>
        ) : (
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} width={80} alt={item.title} />
                <p>{item.title}</p>
                <p>Unid. Disponibles : {item.amount}</p>
                <p>Precio: S/.{item.price}</p>

                <p>
                  <span>Unid {item.quantity}</span>
                  <button 
                    className="quantity-button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <i className='bx bx-plus'></i>
                  </button>

                  <button 
                    className="quantity-button"
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.id, item.quantity - 1);
                      } else {
                        if (window.confirm("¿Deseas eliminar este producto?")) {
                          removeFromCart(item.id);
                        }
                      }
                    }}>
                    <i className='bx bx-minus'></i>
                  </button>
                </p>

                <p>Total S/{item.price * item.quantity}</p>
                <button 
                  className="remove-button"
                  onClick={() => {
                    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
                      removeFromCart(item.id);
                    }
                  }}>
                  <i className='bx bxs-trash-alt'></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul>
        <li className="total-item">
          <h4>Unidades {totalQuantity}</h4>
          <h2>Total del Carrito: S/{total}</h2>
          <button 
            className="checkout-button"
            onClick={onCheckout}>
            COMPRAR
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
