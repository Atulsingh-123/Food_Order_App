import React, { useState } from 'react';
import './Cards.css';

const Cards = (props) => {
    return (
        <>
            <div>
                <div className='cards_container'>
                    <div className='cards'>
                        <div className='product__image'>
                            <img src={props.image} alt='product Image' />
                        </div>

                        <div className='card_contents'>
                            <strong> <h5>{props.title}</h5></strong>
                            <h6>{props.place}</h6>
                            <button onClick={() => props.data(props.item)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
