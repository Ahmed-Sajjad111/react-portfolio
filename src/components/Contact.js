import React from "react";

function Contact() {
    return (
        <section id="contact">
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span>Contact Me</span>
                </h1>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto justify-content-around">
                            <a style={{ color: "green" }} className="links px-auto" href="https://www.linkedin.com/in/ahmed-sajjad-3344b8217/">LinkedIn: Ahmed Sajjad</a>
                            <a style={{ color: "green" }} className="links px-auto" href="https://www.github.com/Ahmed-Sajjad111">Github: Ahmed-Sajjad111</a>
                            <a style={{ color: "green" }} className="links px-auto" href="mailto:uasajjad11198@outlook.com">Email: uasajjad11198@outlook.com</a>
                            <a style={{ color: "green" }} className="links px-auto" href="tel:908-416-2394">Phone: (908) 416-2394</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;