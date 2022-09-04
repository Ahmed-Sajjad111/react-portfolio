import React from "react";

function Resume() {
    return (
        <section id="resume-link">
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "white" }}>
                    <span>Resume and LinkedIn</span>
                </h1>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto justify-content-around">
                        <a style={{ color: "white" }} className="links px-auto" href="https://drive.google.com/file/d/1B_t8ob6cZ0L9RJIeEgU66QAx98aYjVgJ/view?usp=sharing" target="_blank">Click Here To View My Resume</a>
                        <a style={{ color: "white" }} className="links px-auto" href="https://www.linkedin.com/in/ahmed-sajjad-3344b8217/" target="_blank">Click Here To View My LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;