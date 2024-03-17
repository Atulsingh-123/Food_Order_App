import React from 'react'
import './Login.css'
import image from './7.jpg'
// import bgImg from '../assets/img1.jpg';
// import { useForm } from 'react-hook-form';

export default function Login() {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);

    // console.log(watch('username'));

    return (
        <section>
            <div className="register">
                <div className="text">
                    <h2>Sign In</h2>
                    <span>register and enjoy the service</span>

                    <form id='form' className='text___1' >
                        <input type="text" placeholder='username' />
                        <input type="text" placeholder='password' />
                        <input type="text" placeholder='confirm password' />
                        <input type="text" placeholder='mobile number' />

                        <button className='btn'>Sign In</button>
                    </form>

                </div>
            </div>
        </section>
    )
}