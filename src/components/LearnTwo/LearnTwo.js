import React from 'react'
import './LearnTwo.css'
import learn1 from '../../assets/learn1.png'

function LearnTwo() {
    return (
        <div className="bg-dark text-light p-5">
            <div className="container">
                <div className="d-md-flex align-items-center justify-content-between">

                    <div className="learn-info text-md-start text-center m-4">
                        <h1 className="mb-4">Learn About React</h1>
                        <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae odio quasi iusto dolorum explicabo nisi. Accusantium sed quaerat qui repudiandae repellat a, numquam adipisci esse sint, nam sapiente necessitatibus enim!</p>
                        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis unde praesentium minima laborum iusto vero optio, accusantium laboriosam temporibus, perspiciatis atque ullam exercitationem fuga, cupiditate placeat! Molestias ab ducimus.</p>
                        <button className="btn btn-primary btn-lg mt-3">Start Learning</button>
                    </div>
                    <img src={learn1} className="learn-img img-fluid p-5 w-50 d-md-block d-none"/>

                </div>
            </div>
        </div>
    )
}

export default LearnTwo
