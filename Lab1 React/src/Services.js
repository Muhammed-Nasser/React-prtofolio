import React from "react";


class Services extends React.Component {
    render() {

        return (
            <>
                <section id="services" class="services bg-image services-mf route pt-5 ">
                    <div class="container">
                        <div class="row justify-content-center pt-5">
                            <div class="col-md-6 col-sm-12">
                                <div class="title-box text-center">
                                    <i class="fas fa-briefcase"></i>
                                    <h3 class="title-a">
                                        Services
                                    </h3>
                                    <p class="subtitle-a">
                                        I look forward to working with you!
                                    </p>
                                    <div class="line-mf"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center align-content-center text-center">
                            <div class="col-md-4">
                                <div class="service-box">
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="serIcon fas fa-file-code"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h2 class="s-title">Web Development</h2>
                                        <p>
                                            <ul class="text-start s-description">
                                                <li>Front-end web development</li>
                                                <li>Back-end web development</li>
                                                <li>Full-stack web development</li>
                                            </ul>
                                        </p>
                                        <a class="btn-dark" href="mailto: alazaly@outlook.com">Book Service</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service-box">
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="serIcon fas fa-briefcase"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h2 class="s-title">Web Design</h2>
                                        <p>
                                            <ul class="text-start s-description">
                                                <li>Web apps Design</li>
                                                <li>Mobile apps Design</li>
                                                <li>User interface Design</li>
                                            </ul>
                                        </p>
                                        <a class="btn-dark" href="mailto: alazaly@outlook.com">Book Service</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service-box">
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="serIcon fas fa-sitemap"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h2 class="s-title">ERP (odoo)</h2>
                                        <p class="s-description text-center">
                                            "Enterprise Resource Planning"
                                            plan and manage daily activities such as supply chain, manufacturing, services, financials and other processes.
                                        </p>
                                        <a class="btn-dark" href="mailto: alazaly@outlook.com">Book Service</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row justify-content-center align-content-center text-center">
                            <div class="col-md-4">
                                <div class="service-box">
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="serIcon fas fa-ad"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h2 class="s-title">Digital Marketing</h2>
                                        <p>
                                            <ul class="text-start s-description">
                                                <li>Email marketing</li>
                                                <li>Social media marketing</li>
                                                <li>Social Media Advertising</li>
                                            </ul>
                                        </p>
                                        <a class="btn-dark" href="mailto: alazaly@outlook.com">Book Service</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="service-box">
                                    <div class="service-ico">
                                        <span class="ico-circle"><i class="serIcon fab fa-bootstrap"></i></span>
                                    </div>
                                    <div class="service-content">
                                        <h2 class="s-title">Responsive Design</h2>
                                        <p class="s-description text-center">
                                            Responsive web design<br></br> is about creating web pages that look good on all devices!
                                        </p>
                                        <a class="btn-dark" href="mailto: alazaly@outlook.com">Book Service</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
      </>
    );
    }
}

export default Services;