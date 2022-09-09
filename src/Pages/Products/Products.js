import React from 'react';
import './Products.css';
import heart from './heart.svg';
import { Link } from 'react-router-dom';
import inventory from '../../data/inventory';


const Products = () => {
    return (
        <div className='container-products'>
            {inventory.map((item) => {
                return <Link
                    to={{
                        pathname: `/produits/${item.title.replace(/\s+/g, '').trim()}`
                    }}
                    key={item.id}>
                    <div className="bloc-card">
                        <div className='product-card'>
                            <div className="visual-aspect">
                                <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="produit" className="img-product" />
                                <div className="like-container">
                                    <img src={heart} alt="" srcSet="icône like" />
                                </div>
                            </div>
                            <div className="info">
                                <p>{item.title}</p>
                                <p>prix : {item.price}€</p>
                            </div>
                        </div>
                        <div className="back-card"></div>
                    </div>
                </Link>
            })}
        </div>
    );
}

export default Products;
