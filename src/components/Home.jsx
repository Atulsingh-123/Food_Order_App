import React from 'react'
import Cards from './Subcomponent/Cards';
import Sdata from './Sdata';
import first from './first.jpg';
import './Home.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action'

const Home = () => {

    const dispatch = useDispatch()

    const send = (e) => {
        // console.log(e)
        dispatch(ADD(e));
        alert("Item successfully added");
    }


    return (
        <div className='container'>
            {/* <img className='front__img' src={first} alt="Your Image" /> */}

            <div className='heading__style'>
                <h1 className='heading_tag'>Spicy and Delicious Foods</h1>
            </div>
            <img className='front__img ' style={{ width: "100%" }} src='https://d37byfojjwz7vp.cloudfront.net/new_resize_2880_170721012710781.jpeg' alt="Your Image" />
            <div className='sub__container'>
                {
                    Sdata.map((item, index) => (
                        <div key={index} className='column'>
                            <Cards
                                item={item}
                                data={send}
                                image={item.imgsrc}
                                title={item.title}
                                place={item.sname}
                                link={item.link}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
