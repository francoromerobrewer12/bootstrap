import React from 'react'
import { HiOutlineArrowCircleUp } from 'react-icons/hi';


function Footer() {
    return (
        <div className="bg-dark text-light text-center p-3 position-relative">
            <div className="container">
                <p className="footer-text">FRB | Bootstrap Website 2021 &copy;</p>
                <a href="#" className="arrow-top position-absolute top-50 end-0 translate-middle lead">
                    <HiOutlineArrowCircleUp size="2rem"/>
                </a>
            </div>
        </div>
    )
}

export default Footer
