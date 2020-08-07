import React from "react";
import "./style.css";

const ContactMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="contact" className="col-sm-7">
          <h2>Contact</h2>
          <hr />
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Name: Kaleb Garrison</label>
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Email:</label>
              <a href="mailto:kalebgarrison@gmail.com">
                kalebgarrison@gmail.com
              </a>
            </div>
          </form>
          <div className="form-group">
            <label for="formGroupExampleInput">Phone: (678) 764-1929</label>
          </div>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item"><a href="https://www.linkedin.com/in/kaleb-garrison-43b72070/">LinkedIn</a></li>
            <li className="list-group-item"><a href="https://github.com/kalebgarrison">GitHub</a></li>
            <li className="list-group-item"><a href="https://www.canva.com/design/DADphhz28kM/YZJrISZRh8-aqDB295YVRA/view?utm_content=DADphhz28kM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">Resume</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
