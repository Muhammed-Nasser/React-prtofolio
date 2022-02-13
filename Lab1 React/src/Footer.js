import React from "react";

class Footer extends React.Component {
  render() {
    return (
    <>
    <footer  id="contact">
      <div className="container-fluid bg-dark p-5 align-items-center">
       <div className="row col-md-12 justify-content-center align-items-center text-center ">
          <div className="getMe col-md-6 col-sm-12 justify-content-center align-items-center text-center">
            <ul className="block pt-1">
              <h3 className="p-3 text-light">Get in Touch!</h3>
              <li className="block"><a target="_blank"><i className="socialicon fas fa-map-marker-alt"></i><span className="inBlock"> SidiBishr, Alexandria,Egypt.</span></a> </li>
              <li className="block"><a href="tel:+0201090963906" ><i className="socialicon fas fa-mobile-alt"></i><span className="inBlock"> (+2)01090963906</span></a></li>
              <li className="block"><a href = "mailto: alazaly@outlook.com"><i className="socialicon fas fa-paper-plane"></i><span className="inBlock"> alazaly@outlook.com</span></a></li>
            </ul>
          </div>
          <div className="contactMe col-md-6 col-sm-12 justify-content-center align-items-center text-center">
            <ul className="block pt-1">
              <h3 className="p-3 text-light">Follow Me!</h3>
              <li className="inBlock"><a href="https://www.linkedin.com/in/alazaly" target="_blank"><i className="socialicon fab fa-linkedin"></i></a></li>
              <li className="inBlock"><a href="https://github.com/Muhammed-Nasser" target="_blank"><i className="socialicon fab fa-github-square"></i></a></li>
              <li className="inBlock"><a href="https://www.facebook.com/muhammed.nasser.alazaly" target="_blank"><i className="socialicon fab fa-facebook-square"></i></a></li>
              <li className="inBlock"><a href="https://wa.me/+201090963906" target="_blank"><i className="socialicon fab fa-whatsapp-square"></i></a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-light"></hr>
        <div className="row col-md-12 col-sm-12 justify-content-center text-center">
            <div className="text-light">
              Designed by <strong>Muhamad Nasser</strong> 
              <br></br>&copy;All Rights Reserved
            </div>
        </div>
      </div>
    </footer>
    </>
    );
  }
}

export default Footer;
