import React from 'react';
import './Home.css';
import imgHomeShop from './shopimg.jpg';

const Home = () => {
    return (
        <div className="global-container">
            <h1>
                Bienvenue au <span>Shop</span>
            </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores cum pariatur mollitia voluptatibus accusamus architecto modi expedita consectetur accusantium eos velit distinctio, assumenda asperiores itaque, ab hic tenetur explicabo praesentium?</p>
            <img src={imgHomeShop} alt="shop" />
        </div>
    );
}

export default Home;
