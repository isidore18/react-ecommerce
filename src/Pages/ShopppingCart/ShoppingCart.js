import React, {useState, useEffect} from 'react';
import './ShoppingCart.css';
import { useSelector, useDispatch } from 'react-redux';

const ShoppingCart = () => {

    const storeState = useSelector(state => state);
    
    const dispatch = useDispatch();

    const handleChange = (e, id) => {
        const indexItem = storeState.cart.findIndex(obj => obj.id === id );

        const objUpdated = {
            ...storeState.cart[indexItem],
            quantity: +e.target.value
        }

        dispatch({
            type: 'UPDATEITEM',
            payload: objUpdated
        })
    }


    let totalPrice = 0;

    if(storeState.cart.length > 0 ) {
        for(const item of storeState.cart) {
            const price = item.price * item.quantity;
            totalPrice += price;
        }
    }

    return (
        <div className='global-container'>
            <p className="heading-cart"></p>
            <ul className="cart-list">
                {storeState.cart.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="produit" />
                            <div className="bloc-cart-infos">
                                <h4>{item.title}</h4>
                                <p>Price : {item.price}€</p>
                            </div>
                            <div className="bloc-input">
                                <label htmlFor="quantityInput">Quantité</label>
                                <input type="number" name="quantityInput" id="quantityInput" value={item.quantity} 
                                    onChange={(e => handleChange(e, item.id))}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <p className="total-price">Total: {totalPrice.toFixed(2)}€</p>
            <button className="btn-cart">Procéder au paiement</button>

        </div>
    );
}

export default ShoppingCart;
