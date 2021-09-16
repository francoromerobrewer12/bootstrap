import React from 'react';
import img from '../../assets/hero2.png';
import './Hero.css';

function Hero() {
    return (
        <div className="bg-dark text-light p-5 p-lg-0 text-center hero">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="hero-text text-center text-md-start">
                        <h1>Become a <span className="text-primary">Web Developer</span></h1>
                        <p className="hero-text lead mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita modi voluptas explicabo blanditiis. Velit recusandae sint libero aspernatur, quod laborum quam nihil laboriosam, ex mollitia dolorem. Repudiandae eum officia ad?</p>
                        <button className="btn btn-primary btn-lg mt-2">Start the Enrollment</button>
                    </div>
                    <img src={img} alt="" className=" img-fluid w-50 p-5 d-none d-md-block"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
