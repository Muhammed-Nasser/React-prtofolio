import React from "react";
import PersonalImg from "./img/testimonial-2.jpg";
import Cv from "./files/Muhammad Nasser CV ITI.pdf";
import PersonalCer1 from "./files/CourseraIBMcloud.pdf";
import PersonalCer2 from "./files/CourseraAngular.pdf";
import PersonalCer3 from "./files/UdacityDMP.pdf";
class AboutMe extends React.Component {
  render() {
    return (
    <>
    <section id="about" className="about-mf pt-5  route">
      <div className="container p-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><strong className="infoTitle" >Name: </strong> <span className="infoMain">Muhammad Nasser Alazaly</span></p>
                        <p><strong className="infoTitle" >Profile: </strong> <span className="infoMain">Full Stack Developer</span></p>
                        <p><strong className="infoTitle" >Email: </strong> <span className="infoMain">alazaly@gmaial.com</span></p>
                        <p><strong className="infoTitle" >Phone: </strong> <span className="infoMain">(+2) 01090963906</span></p>
                      </div>
                    </div> 
                    <div className=" col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src={PersonalImg} className="img-fluid rounded b-shadow-a"/>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="skill-mf">
                    <p className="text-uppercase fw-bold">Skill</p>
                    <span className="skillTitle">HTML</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <span className="skillTitle">CSS3</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <span className="skillTitle">JavaScript</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <span className="skillTitle">Python</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <span className="skillTitle">Bootstrap</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>
                    <span className="skillTitle">React.js</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <span className="skillTitle">PostgreSQL</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <span className="skillTitle">Django</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <span className="skillTitle">Flask</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <span className="skillTitle">Angular</span> <span className="pull-right"></span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <hr></hr>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="text-uppercase title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                        I am a Full Stack developer and an ITI intern. I am Skilled in HTML5, CSS 3, SQL, Python, JavaScript, Bootstrap, jQuery, Django, and more Web Development Technologies.<br></br>
                        I am searching for a challenging position to utilize my tech skills for software development. I look forward to working with you!
                    </p>
                    <hr></hr>
                    <h5 className="text-uppercase title-left">
                        Education
                    </h5>
                    <p className="lead">
                        <ul> 
                            <li>
                                <strong>University Degree:</strong> ITI internship,Information Technology Institute (ITI). <br></br>
                                <strong>Department:</strong> Open Source (Web Development). <br></br>                    
                                <strong>Graduation Year:</strong>  2022.<br></br>
                            </li>
                            <hr></hr>
                            <li>
                                <strong>University Degree:</strong>  B.Sc.Faculty of SCIENCE, Alexandria University. <br></br>
                                <strong>Department:</strong> Petroleum Geology (APGP). <br></br>                    
                                <strong>Graduation Year:</strong>  2018.<br></br>
                            </li>
                        </ul>
                    </p>
                    <hr></hr>
                    <h5 className="text-uppercase title-left">
                        Certifications
                    </h5>
                    <p className="lead">
                        <ul> 
                            <li>
                                <strong>Title:</strong> Introduction to Cloud Computing. <br></br>
                                <strong>Provider:</strong> IBM.<br></br>                    
                                <strong>Issued:</strong> November 2021 - December 2021<br></br><br></br>
                                <a className="btn-dark" href={PersonalCer1} download target="_blank">Show Certificate</a>
                            </li>
                            <hr></hr>
                            <li>
                                <strong>Title:</strong> Front-End JavaScript Frameworks: Angular. <br></br>
                                <strong>Provider:</strong> The Hong Kong University of Science and Technology.<br></br>                    
                                <strong>Issued:</strong> March 2021 - April 2021<br></br><br></br>
                                <a className="btn-dark" href={PersonalCer2} download target="_blank">Show Certificate</a>
                            </li>
                            <hr></hr>
                            <li>
                                <strong>Title:</strong> Digital Marketing Professional. (Nano Degree) <br></br>
                                <strong>Provider:</strong> (FWD)Scholarship sponsored by Ministry of Communications and Information Technology<br></br>                    
                                <strong>Issued:</strong> January 2021 - April 2021 <br></br> <br></br>
                                <a className="btn-dark" href={PersonalCer3} download target="_blank">Show Certificate</a>
                            </li>
                        </ul>
                    </p>
                    <hr></hr>
                    <div className="btn-right">
                      <a className="btn-dark" href={Cv} download target="_blank">Download Resume as PDF</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>);
  }
}

export default AboutMe;
