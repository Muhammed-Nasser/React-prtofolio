import React from "react";
import { projects } from "./ProjectData";


class Portfolio extends React.Component {
  render() {
    
    return (
        <>
            <section id="portfolio" class="">
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-sm-12 col-md-6 ">
                            <div className="title-box text-center m-5">
                                <i className="far fa-lightbulb"></i>
                                <h3 className="title-a">
                                    Portfolio
                                </h3>
                                <p className="subtitle-a">
                                    I take pride in the work I do, the code I write, and I provide my clients with the highest level of service possible. I look forward to working with you!
                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                            {projects.map((project) => (
                            <div className="col-md-4">
                                <div className="work-box">
                                    <div className="work-content">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={project.image1} className="d-block w-100" alt="..."></img>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={project.image2} className="d-block w-100" alt="..."></img>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={project.image3} className="d-block w-100" alt="..."></img>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                        <div className="row justify-content-center align-content-center ">
                                            <div className="col-sm-12">
                                                <h3 className="w-title">{project.title}<br></br> {project.client}</h3>
                                                <div className="w-more">
                                                    <span className="w-ctegory">{project.category}</span> / <span className="w-date">{project.data}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-w justify-content-center align-content-center pt-5">
                                            <a className="btn-dark m-1" href="mailto: alazaly@outlook.com">Book Service</a>
                                            <a className="btn-dark m-1" href={project.link} target="_blank">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                            
                        </div>))}
                    </div>

                </div>
            </section>
        </>
    );
  }
}

export default Portfolio;