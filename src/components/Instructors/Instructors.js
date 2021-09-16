import React from 'react'
import './Instructors.css'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import person1 from '../../assets/6.jpg';
import person2 from '../../assets/7.jpg';
import person3 from '../../assets/8.jpg';
import person4 from '../../assets/9.jpg';


function Instructors() {
    return (
        <div className="bg-primary p-5 text-light" id="instructors">
            <div className="container">
                <h2 className="text-center mt-5 mb-5">Our Instructors</h2>
                <div className="d-md-flex align-items-center justify-content-center">

                    <div className="card bg-light text-dark m-2">
                        <div className="card-body text-center">
                            <img src={person1} alt="card-img" className="card-img"/>
                            <h3 className="card-title">Alice Stuart</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat placeat, ex amet hic recusandae.</p>
                            <div className="card-icons d-flex justify-content-around">
                                <FaFacebook className="card-icon" size="0.5rem"/>
                                <AiFillTwitterCircle className="card-icon" size="0.5rem"/>
                                <AiFillInstagram className="card-icon" size="0.5rem"/>
                                <FaYoutube className="card-icon" size="0.5rem"/>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-light text-dark m-2">
                        <div className="card-body text-center">
                            <img src={person2} alt="card-img" className="card-img"/>
                            <h3 className="card-title">Kate Blonde</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat placeat, ex amet hic recusandae.</p>
                            <div className="card-icons d-flex justify-content-around">
                                <FaFacebook className="card-icon" size="0.5rem"/>
                                <AiFillTwitterCircle className="card-icon" size="0.5rem"/>
                                <AiFillInstagram className="card-icon" size="0.5rem"/>
                                <FaYoutube className="card-icon" size="0.5rem"/>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-light text-dark m-2">
                        <div className="card-body text-center">
                            <img src={person3} alt="card-img" className="card-img"/>
                            <h3 className="card-title">James Porter</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat placeat, ex amet hic recusandae.</p>
                            <div className="card-icons d-flex justify-content-around">
                                <FaFacebook className="card-icon" size="0.5rem"/>
                                <AiFillTwitterCircle className="card-icon" size="0.5rem"/>
                                <AiFillInstagram className="card-icon" size="0.5rem"/>
                                <FaYoutube className="card-icon" size="0.5rem"/>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-light text-dark m-2">
                        <div className="card-body text-center">
                            <img src={person4} alt="card-img" className="card-img img-fluid"/>
                            <h3 className="card-title">Stacy Williams</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat placeat, ex amet hic recusandae.</p>
                            <div className="card-icons d-flex justify-content-around">
                                <FaFacebook className="card-icon" size="0.5rem"/>
                                <AiFillTwitterCircle className="card-icon" size="0.5rem"/>
                                <AiFillInstagram className="card-icon" size="0.5rem"/>
                                <FaYoutube className="card-icon" size="0.5rem"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Instructors
