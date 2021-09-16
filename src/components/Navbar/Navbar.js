import React from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top text-light bg-dark py-3">

                <div className="container ">
                    <a className="navbar-brand" href="#">PO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <GiHamburgerMenu />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#learning">What You'll Learn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#questions">Questions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#instructors">Our Instructors</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
