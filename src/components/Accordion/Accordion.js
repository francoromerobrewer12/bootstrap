import React from 'react'
import './Accordion.css'

function Accordion() {
    return (
        <div className="bg-light text-dark text-center p-5">
            <div className="container">
                <h2>Frequently Asked Questions</h2>

                <div className="accordion accordion-flush mt-5 mb-5" id="accordionFlushExample">
                    <div className="accordion-item w-75 m-auto">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                            Where exactly are you located?
                        </button>
                        </h2>
                        <div id="question-one" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae quas quos, ullam id perspiciatis.</div>
                        </div>
                    </div>

                    <div className="accordion-item w-75 m-auto">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                            How much does it cost to attend?
                        </button>
                        </h2>
                        <div id="question-two" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores tempore, provident tenetur sunt recusandae doloremque rem adipisci error qui. Reprehenderit.</div>
                        </div>
                    </div>

                    <div className="accordion-item w-75 m-auto">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                            What do I need to know?
                        </button>
                        </h2>
                        <div id="question-three" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae quas quos, ullam id perspiciatis.</div>
                        </div>
                    </div>
                    <div className="accordion-item w-75 m-auto">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-four">
                            How do I sign up?
                        </button>
                        </h2>
                        <div id="question-four" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat velit animi dolorum, ratione ex reiciendis illo unde odio tempore. Qui laboriosam ab sunt adipisci corrupti, quod ex soluta dolorum itaque?</div>
                        </div>
                    </div>
                    <div className="accordion-item w-75 m-auto">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question-five">
                            Would you help me get a job?
                        </button>
                        </h2>
                        <div id="question-five" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque recusandae nesciunt quas pariatur possimus doloremque laboriosam blanditiis et dolore ullam.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
