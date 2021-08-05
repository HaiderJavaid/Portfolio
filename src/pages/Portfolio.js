import React from 'react';
import { Link } from 'react-router-dom';


class Portfolio extends React.Component{
    render(){
        return(

            <div>
  <div className="fixed-top-navbar">
    <ul className="nav flex-column">
      <li className="nav-item"><a className="nav-link" href="#home"><span>Intro</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#services"><span>Services</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#portfolio"><span>Portfolio</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#our-story"><span>Our Story</span></a></li>
      <li className="nav-item"><a className="nav-link" href="#contact-us"><span>Contact Us</span></a></li>
    </ul>
  </div>

  <div className="parallax-content port-content" id="home">
  <div className="overlay">
    <div className="container">
      <div className="first-content">
        <h1>web developer <br /> Portfolio</h1>
        <span>A showcase of my <em>Skills</em> and <em>Projects</em></span>
        <div className="one-button">
          <a href="#services">See More</a>

        </div>
      </div>
    </div>
    </div>
  </div>

  <div className="about" id="services">
      <h1 className="about-title">About Me</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            
          <div className="col-md-4 about-text">

            
          <img src="assets/img/angel.jpg" alt=""  height="300"/>
          </div>
            
            <div className="col-md-8 about-text">
              
              <div className="service-item">

                <div className="line-dec" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis.</p>
              </div>
              
            </div>
          </div>
        </div>                
      </div>
    </div>
  </div>
  <div className="parallax-content skills" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <h1 className="service-title">Technologies</h1>
          <div  className="tech-list">
            
            <div>
            <img src="assets/img/html.png" alt=""  height="60"/>
            <img src="assets/img/css-3.png" alt=""  height="60"/>
            <img src="assets/img/javascript.png" alt=""  height="60"/>
            <img src="assets/img/react .png" alt=""  height="65"/> 
            </div>
            <div>
            <img src="assets/img/material-ui.png" alt=""  height="60"/>
            <img src="assets/img/bootstrap.png" alt=""  height="65"/>
            <img src="assets/img/sass.png" alt=""  height="60"/>
            </div>
            
            
            


          </div>
        </div>

        <div className="col-md-6">
        <h1 className="service-title">Skills</h1>
          <div  className="skill-list">
            
            <ul>
            <li>Front-End Web Developing</li>
            <li>Responsive Web Design</li>
            <li>Javascript Libraries and Frameworks</li>
            <li>Version Control System</li>
            </ul>
           
          </div>
        </div>
          <div className="resume">
            <button>Download Resume</button>
          </div>
      </div>
    </div>
  </div>
  <div className="tabs-content" id="our-story">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="wrapper">
            <section id="first-tab-group" className="tabgroup">
              <div id="tab1">
                <img src="assets/img/1st-tab.jpg" alt />
                <p>Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.</p>
                <button>Live Website</button> <button>View Code</button>
              </div>
              <div id="tab2">
                <img src="img/2nd-tab.jpg" alt />
                <p>Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.</p>
                <button>Live Website</button> <button>View Code</button>

              </div>
              <div id="tab3">
                <img src="img/3rd-tab.jpg" alt />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.</p>
                <button>Live Website</button> <button>View Code</button>

              </div>
              <div id="tab4">
                <img src="img/4th-tab.jpg" alt />
                <p>Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.</p>
                <button>Live Website</button> <button>View Code</button>
                
              </div>
            </section>
            <ul className="tabs clearfix" data-tabgroup="first-tab-group">
              <li><a href="#tab1" className="active">Budget App</a></li>
              <li><a href="#tab2">My Covid</a></li>
              <li><a href="#tab3">Xuniq Fitness</a></li>
              <li><a href="#tab4">2019 - Now</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="parallax-content contact-content" id="contact-us">
    
      
        <div className="col-md-6">
          <div className="contact-form">
            <div className="row">
              <form id="contact" action method="post">
                <div className="row">
                  <div className="col-md-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="btn">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="primary-button">
            <a href="#home">Back To Top</a>
          </div>
          <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-google" /></a></li>
            <li><a href="#"><i className="fa fa-dribbble" /></a></li>
          </ul>
          <p>Copyright © 2021 Haider Javaid 
            - Design: <a rel="nofollow noopener" href="https://templatemo.com"><em>by Haider</em></a></p>
        </div>
      </div>
    </div>
  </footer>
</div>

            )
        }
    }
    
    export default Portfolio;