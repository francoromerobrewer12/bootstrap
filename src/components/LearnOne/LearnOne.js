import React from 'react'
import './LearnOne.css'
import learn2 from '../../assets/learn2.png'

function LearnOne() {
    return (
        <div className="bg-light text-dark p-5">
            <div className="container">
                <div className="d-md-flex align-items-center justify-content-between">

                    <img src={learn2} className="learn-img img-fluid w-50 d-md-block d-none"/>
                    <div className="learn-info text-md-end text-center m-4">
                        <h1 className="mb-4">Learn the Fundamentals</h1>
                        <p className="mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae odio quasi iusto dolorum explicabo nisi. Accusantium sed quaerat qui repudiandae repellat a, numquam adipisci esse sint, nam sapiente necessitatibus enim!</p>
                        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis unde praesentium minima laborum iusto vero optio, accusantium laboriosam temporibus, perspiciatis atque ullam exercitationem fuga, cupiditate placeat! Molestias ab ducimu.</p>
                        <button className="btn btn-primary btn-lg mt-3">Start Learning</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LearnOne 