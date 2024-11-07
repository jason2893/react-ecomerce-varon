import React from 'react';
import '../styles/ProductItem.css';

const ProductItem = ({ product, addToCart, isInCart }) => {

    return (
        <div className='producto-car'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className='car-descripcion'>{product.description}</p>
            <p className='car-oferta'> 
                {product.amount > 0 ? (
                    <span className='car-disponible'>Quedan {product.amount} unidades</span>
                ) : (
                    <span className='car-agostado'>Agotado</span>
                )}
            </p>

            <table className='color-table'>
    <thead>
        <tr>
            <th>Talla</th>
            <th>Colores</th>
        </tr>
    </thead>
    <tbody>
        {product.variations.map(variation => (
            <tr key={variation.size}>
                <td>{variation.size}</td>
                <td>
                    {variation.colors.some(color => color.stock > 0) ? ( 
                        <div className='color-columns'>
                            {variation.colors.map((color, index) => (
                                color.stock > 0 && (  
                                    <span 
                                        key={index}  
                                        style={{ backgroundColor: color['color-html'],
                                            margin: '0 2px',
                                            borderRadius: '3px',
                                            color: color['color-html'],
                                            border: '1px solid #ccc',
                                            display: 'inline-block',
                                            width: '10px',
                                            height: '10px'
                                        }}>
                                        xx
                                    </span>
                                )
                            ))}
                        </div>
                    ) : (
                        <span>Agotado</span>
                    )}
                </td>
            </tr>
        ))}
    </tbody>
</table>



            <p className='car-price'>s/.{product.price}</p>
            
            <button 
                onClick={() => addToCart(product)} 
                disabled={isInCart || product.amount === 0} 
                style={{ 
                    backgroundColor: (isInCart) ? '#cfd4de' : 
                                     (isInCart || product.amount === 0)  ? 'transparent':'#1c66ab' ,
                    color: isInCart ? '#2b632e' : '#fff', 
                    border: isInCart ? '1px solid #b7b7b7' : '1px solid transparent',
                    cursor: isInCart ? 'not-allowed' : 'pointer'
                }}
            >
                {isInCart ? <p><i className='bx bx-check'></i><i className='bx bx-happy-beaming'></i></p> :
                 isInCart || product.amount === 0 ? <i className='bx bx-tired' style={{color:'#df2f00'}}></i> : <i className='bx bx-cart'></i>}
            </button>
        </div>
    );
};

export default ProductItem;
