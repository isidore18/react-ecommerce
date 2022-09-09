import React, { useState, useEffect, useRef } from 'react';
import './ProductShowcase.css';
import { useParams } from 'react-router-dom';
import inventory from '../../data/inventory';
import { useDispatch } from 'react-redux';

const ProductShowcase = () => {
    const [nbMugs, setNbMugs] = useState(1);
    const { id} = useParams();

    const addingInfo = useRef();

    let timerInfo;
    let display = true;

    const dispatch = useDispatch();

    const updateMugs = (e) => {
        setNbMugs(+e.target.value)
    }

    const addToCart = e => {
        e.preventDefault()

        const itemAdded = {
            ...inventory[productClicked],
            quantity: nbMugs
        }

        dispatch({
            type: 'ADDITEM',
            payload: itemAdded
        })
        addingInfo.current.innerText = 'Ajouté au panier';
    
        if(display) {
            display = false;
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = '';
                display = true;
            }, 500);
        }
    }

    // use this function to prevent try set innerText to non existing element addingInfo.current
    useEffect(() => {

        return () => {
            clearTimeout(timerInfo);
        }
    }, []);

    const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, '').trim() === id)

    return (
        <div className="showcase">
            <div className="container-img-showcase">
                <img src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} alt="produit" />
            </div>
            <div className="product-info">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix : {inventory[productClicked].price}€</p>
                <form onSubmit={addToCart}>
                    <label htmlFor="quantity">Quantité</label>
                    <input type="number" name="quantity" id="quantity" value={nbMugs} onChange={updateMugs} />
                    <button>Ajouter au panier</button>
                    <span ref={addingInfo} className="adding-info"></span>
                </form>
            </div>
        </div>
    );
}

export default ProductShowcase;
