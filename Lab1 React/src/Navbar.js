import React from "react";


class Navbar extends React.Component {
  render() {
    
    return (
      <>
        <nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-black fixed-top">
            <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav" id="myDIV">
                <li class="nav-item justify-content-center"><a class="text-uppercase nav-link active " aria-current="page" href="#"><i class="fas fa-home"></i> Home</a></li>
                <li class="nav-item justify-content-center"><a class="text-uppercase nav-link" href="#about"><i class="icon fas fa-user-graduate"></i> About Me</a></li>
                <li class="nav-item justify-content-center"><a class="text-uppercase nav-link" href="#services"><i class="icon fas fa-briefcase"></i> Services</a></li>
                <li class="nav-item justify-content-center"><a class="text-uppercase nav-link" href="#portfolio"><i class="icon fas fa-code"></i> PORTFOLIO</a></li>
                <li class="nav-item justify-content-center"><a class="text-uppercase nav-link" href="#contact"><i class="icon fas fa-envelope"></i> Contact Me</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
      </>
    );
  }
}

export default Navbar;