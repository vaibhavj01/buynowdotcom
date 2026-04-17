import React from "react";
import { FaFacebookF,FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () =>{
    return(
        <footer className='mega-footer'>
            <div className='footer-container'>

                <div className='footer-section'>
                    <h3>About Us</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae sapiente dolores voluptates aperiam est accusamus minima distinctio doloribus. 
                        Culpa explicabo quo ipsa aliquid est vitae dolorem fuga, eius laboriosam iusto.</p>
                </div>

                <div className='footer-section'>
                    <h3>Category </h3>
                    <ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h3>Contact</h3>
                    <p>Email : info@vaibhavweb.com</p>
                    <p>phone : (+91) 9730849601</p>
                </div>
                <div className='footer-section'>
                    <h3>Follow Us</h3>
                    <div className='social-icons'>
                        <a href=""
                           target='_blank'
                           rel="noopener noreferrer"
                        ><FaFacebookF/></a>
                        <a href=""
                           target='_blank'
                           rel="noopener noreferrer"
                        ><FaTwitter/></a>
                        <a href=""
                           target='_blank'
                           rel="noopener noreferrer"
                        ><FaInstagram/></a>

                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; 2026 buynow.com .All right reserved.</p>
                </div>
            </div>

                
        </footer>
    )
}
export default Footer