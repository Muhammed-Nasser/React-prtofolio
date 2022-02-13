import React from "react";


class Hero extends React.Component {
  render() {
    
    return (
      <>
        <div id="home" className="bg-image container-fluid justify-content-center">
          <div className="row social">
            <ul>
              <li><a href="https://www.linkedin.com/in/alazaly" target="_blank"><i className="socialicon fab fa-linkedin"></i></a></li>
              <li><a href="https://github.com/Muhammed-Nasser" target="_blank"><i className="socialicon fab fa-github-square"></i></a></li>
              <li><a href="https://www.facebook.com/muhammed.nasser.alazaly" target="_blank"><i className="socialicon fab fa-facebook-square"></i></a></li>
              <li><a href="https://wa.me/+201090963906" target="_blank"><i className="socialicon fab fa-whatsapp-square"></i></a></li>
            </ul>
          </div>
          <div className="row hero-title">
            <div >Hi, I am Muhammad Nasser<br></br><span id="message">Full Stack Web Developer</span></div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
