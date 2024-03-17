import React from 'react'
import './CartProduct.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Item from './item';

const CartProduct = () => {
    const { id } = useParams()
    const [data, setData] = useState([]);
    console.log(".------>", data);

    const getData = useSelector((state) => state.cartreducer.carts);
    console.log(getData)

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id
        })
        setData(compareData)
        console.log(">------>", compareData);
    }

    useEffect(() => {
        compare();
    }, [id])

    return (
        <div> <div className='text__decoration'>
            <h1>Items Detail page</h1>
        </div>

            {
                data.map((ele) => {
                    return (
                        <>
                            <Item
                                img={ele.imgsrc}
                                title={ele.title}
                                price={ele.sname}
                            />
                        </>
                    )
                })
            }
            <br />
            <br />
        </div>
    )
}

export default CartProduct


