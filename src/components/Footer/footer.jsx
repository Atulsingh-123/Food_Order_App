import React from "react";
import Item from './Item'
import './Item.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <>
            <footer className="  text-white bg-gray-400" >
                {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <h1
                    className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
                >
                    <span className="text-blue-700">Free</span> until you're ready to launch
                </h1>
                <div>
                    <input
                        type="number"
                        placeholder="Enter Your Number"
                        className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button
                        className="bg-blue-700 hover:bg-blue-900 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
                    >
                        Submit
                    </button>
                </div>
            </div> */}
                <Item />
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"
                >

                    <span style={{ color: "black" }}>© 2024 DatorTech. All rights reserved.</span>
                    <span style={{ color: "black" }}>Terms · Privacy Policy</span>
                </div>
                {/* <div class="social">
                    <a href="#"><i class="fab fa-facebook"><FacebookIcon /></i></a>
                    <a href="#"><i class="fab fa-instagram"><InstagramIcon /></i></a>
                    <a href="#"><i class="fab fa-youtube">< YouTubeIcon /></i></a>
                    <a href="#"><i class="fab fa-twitter"><XIcon /></i></a>
                    <a href="#"><i class="fab fa-linkedin"><LinkedInIcon /></i></a>
                </div> */}
            </footer>
            <br />
            <br />
        </>
    );
};

export default Footer;