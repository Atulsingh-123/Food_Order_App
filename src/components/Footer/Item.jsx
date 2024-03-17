import React from "react";
import './Item.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Item = () => {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col" id="company">
                        <img src="images/logo.png" alt="" class="logo" />
                        <p>
                            Delicious, Spicy and Tasty Food ,visit out website which provide you fastest delivery of food at any place.
                        </p>
                        <div class="social">
                            <a href="#"><i class="fab fa-facebook"><FacebookIcon /></i></a>
                            <a href="#"><i class="fab fa-instagram"><InstagramIcon /></i></a>
                            <a href="#"><i class="fab fa-youtube">< YouTubeIcon /></i></a>
                            <a href="#"><i class="fab fa-twitter"><XIcon /></i></a>
                            <a href="#"><i class="fab fa-linkedin"><LinkedInIcon /></i></a>
                        </div>
                    </div>


                    <div class="col" id="services">
                        <h3>HELP AND SUPPORT</h3>
                        <div class="links">
                            <a href="#">Terms of Use</a>
                            <a href="#">Search Terms</a>
                            <a href="#">Store Location</a>
                            <a href="#">Order and Returns</a>
                            <a href="#">Deliveries</a>
                        </div>
                    </div>

                    <div class="col" id="useful-links">
                        <h3>CORPORATIONS</h3>
                        <div class="links">
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Our Policy</a>
                            <a href="#">Help</a>
                        </div>
                    </div>

                    <div class="col" id="contact">
                        <h3>Contact</h3>
                        <div class="contact-details">
                            <i class="fa fa-location"></i>
                            <p>Nashik, Maharashtra <br /> MH, INDIA</p>
                        </div>
                        <div class="contact-details">
                            <i class="fa fa-phone"></i>
                            <p>+91-8755856858</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Item;