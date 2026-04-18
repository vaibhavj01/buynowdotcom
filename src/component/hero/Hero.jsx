import React, { useState } from "react";
import Slider from "./HeroSlider"; 
import HeroSlider from "./HeroSlider";
import SearchBar from "../search/SearchBar";
import { useDispatch } from "react-redux";
import { setSearchQuery, setSelectedCategory } from "../../store/features/searchSlice";

const Hero = () => {
    const dispatch = useDispatch();
    const[currentSlide,setcurrentslide] = useState(0)
    return (
        <div className="hero">
            <HeroSlider setcurrentslide={setcurrentslide} />
            <div className="hero-content">
                <h1>Welcome <span className="text-primary">buynow</span>.com</h1>
                <SearchBar 
                onChange={(e)=> dispatch(setSearchQuery(e.target.value))}
                onCategoryChange={(category) => dispatch(setSelectedCategory(category))}
                />
                <div className="home-button-container">

                    <a href="#" className="home-shop-button link">Shop Now </a>
                    <button className="deals-button">Today's Deal</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;