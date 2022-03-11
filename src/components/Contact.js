import React from "react";

function Contact() {
    return (
        <div className="col-md-12">
            <div className="col-md-12 text-center">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span className="text-black" style={{ textAlign: "center" }}>
                        Contact Me
                    </span>
                </h1>
            </div>
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span className="text-black"  style={{ textAlign: "center" }}>
                            <a style={{ color: "green" }} className="px-5" href="https://www.linkedin.com/in/ahmed-sajjad-3344b8217/">LinkedIn: Ahmed Sajjad</a>
                            ||
                            <a style={{ color: "green" }} className="px-5" href="https://www.github.com/Ahmed-Sajjad111">Github: Ahmed-Sajjad111</a>
                            ||
                            <a style={{ color: "green" }} className="px-5" href="mailto:uasajjad11198@outlook.com">Email: uasajjad11198@outlook.com</a>
                            ||
                            <a style={{ color: "green" }} className="px-5" href="tel:908-416-2394">Phone: (908) 416-2394</a>
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Contact;