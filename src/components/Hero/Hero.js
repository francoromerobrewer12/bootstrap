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
                        <button className="btn btn-primary btn-lg mt-2" data-bs-toggle="modal" data-bs-target="#modal">Start the Enrollment</button>
                    </div>
                    <img src={img} alt="" className=" img-fluid w-50 p-5 d-none d-md-block"/>
                </div>

                <div class="modal fade text-dark" id="modal" tabindex="-1" >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h3 className="form-title mb-4">Start the Enrollment</h3>
                                <input type="text" placeholder="Name" className="input-box p-2 w-75 mb-2"/>
                                <input type="text" placeholder="Surname" className="input-box p-2 w-75 mb-2"/>
                                <input type="text" placeholder="Email" className="input-box p-2 w-75 mb-2"/>
                                <textarea className="w-75 p-2" name="message" id="message" cols="30" rows="8"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
