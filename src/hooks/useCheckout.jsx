import { useState } from 'react';

const useCheckout = (cartItems, clearCart,fetchProducts) => {  // Agregar clearCart como argumento
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (isCheckingOut) return;
    setIsCheckingOut(true);

    const order = {
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };

    try {
      const response = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        let stockUpdated = true;

        for (let item of cartItems) {
          const productResponse = await fetch(`http://localhost:5000/products/${item.id}`);
          const productData = await productResponse.json();

          const updatedAmount = productData.amount - item.quantity;

          if (updatedAmount >= 0) {
            const updatedProduct = {
              ...productData,
              amount: updatedAmount
            };

            const updateResponse = await fetch(`http://localhost:5000/products/${item.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedProduct),
            });

            if (!updateResponse.ok) {
              alert(`Error al actualizar el stock de ${item.title}.`);
              stockUpdated = false;
              break;
            }
          } else {
            alert(`No hay suficiente stock de ${item.title}.`);
            stockUpdated = false;
            break;
          }
        }

        if (stockUpdated) {
          clearCart();  
          await fetchProducts();
          alert("Compra realizada con éxito");
        } else {
          alert("La compra no se pudo completar debido a stock insuficiente.");
        }
      } else {
        alert("Error al realizar la compra");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al realizar la compra");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return { isCheckingOut, handleCheckout };
};

export default useCheckout;
