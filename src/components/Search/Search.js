import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className="bg-primary p-5">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between ">
                    <h3 className="text-light">Sign Up for Newsletter</h3>
                    <div class="input-group search-input">
                        <input type="text" className="form-control" placeholder="Enter your Email" />
                        <button class="btn btn-dark" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
