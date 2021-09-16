import React from 'react'
import './Cards.css'
import { MdLaptop } from 'react-icons/md';
import { BsPersonSquare } from 'react-icons/bs';
import { IoPeople } from 'react-icons/io5';


function Cards() {
    return (
        <div className="bg-light text-dark p-5">
            <div className="container">
                <div class="card-group">

                    <div className="card m-2 bg-dark text-light">
                        <div className="card-body text-center">
                            <MdLaptop className="card-icon"/>
                            <h3 className="card-title ">Virtual</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi.</p>
                            <button className="btn btn-primary card-button">Read More</button>
                        </div>
                    </div>
                    <div className="card m-2 bg-secondary text-light">
                        <div className="card-body text-center">
                            <BsPersonSquare className="card-icon"/>
                            <h3 className="card-title ">Hybrid</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi.</p>
                            <button className="btn btn-primary card-button">Read More</button>
                        </div>
                    </div>
                    <div className="card m-2 bg-dark text-light">
                        <div className="card-body text-center">
                            <IoPeople className="card-icon"/>
                            <h3 className="card-title ">In Person</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, excepturi.</p>
                            <button className="btn btn-primary card-button">Read More</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards
