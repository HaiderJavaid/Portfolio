import React, {useEffect} from 'react';

import {Link} from 'react-router-dom';






class Home extends React.Component{

  
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

  <div className="parallax-content baner-content" id="home">
  <div className="overlay">
    <div className="container">
      <div className="first-content">
        <h1>Step Up Your <br /> Online Business</h1>
        <span>Get more sales with your own <em>Website</em></span>
        <div className="primary-button">
          <a href="#services">See How</a>

        </div>
      </div>
    </div>
    </div>
  </div>

  <div className="service-content" id="services">
      <h1 className="service-title">How a Website Can Boost Your Sales?</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="service-item">
                <h1>Generates Leads</h1>
                <div className="line-dec" />
                <p>A website helps your business by generating leads with calls-to-action, and gives people opportunities to intereact with your business.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h1>Saves Time</h1>
                <div className="line-dec" />
                <p>A website can save you time and money as a business owner. It enables you to provide the same information you would in a conversation.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h1>Promotes Your Business</h1>
                <div className="line-dec" />
                <p>In addition to giving information about your business, a website allows you to showcase your business’s products and services.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <h1>Competitive Advantage</h1>
                <div className="line-dec" />
                <p>The more information you can provide about your products, the more distinguished your business are from your competitors.</p>
              </div>
            </div>
          </div>
        </div>                
      </div>
    </div>
  </div>
  <div className="parallax-content projects-content" id="portfolio">
    <div className="container">
      <h1>We Make Professional Websites with 3 Simple Steps</h1>
      <div className="row">
        <div className="col-md-12">
          <div id="owl-testimonials" className="owl-carousel owl-theme">
            
            <div className="item">
              <div className="testimonials-item">
                <a href="img/6th-big-item.jpg" data-lightbox="image-1"></a>
                <div className="text-content">
                  <h4>Step 1</h4>
                  <span>Planning Process</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-item">
                <a href="img/2nd-big-item.jpg" data-lightbox="image-1"></a>
                <div className="text-content">
                  <h4>Step 2</h4>
                  <span>Design and Develop</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-item">
                <a href="img/1st-big-item.jpg" data-lightbox="image-1"></a>
                <div className="text-content">
                  <h4>Step 3</h4>
                  <span>Review and Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tabs-content" id="our-story">
    <div className="container">
      <div className="row">
        
        <div className="col-md-8 mx-auto">
        <h1>Why Choose to Make A Website With us?</h1>
          <div className="wrapper">
            <section id="first-tab-group" className="tabgroup-1">
              <div id="tab1">
              <h4>Fastest Loading Speed</h4>
                <p>Please do not re-distribute our template ZIP file on your template collection sites. You can make a screenshot and a link back to our website. This template can be used for personal or commercial purposes by end-users.</p>
              </div>
              <div id="tab2">
              <h4>Secured and Reliable</h4>
                <p>Aliquam eu ultrices risus, sed condimentum diam. Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique dui tempor venenatis.</p>
              </div>
              <div id="tab3">
              <h4>Mobile Responsive</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ligula est, at venenatis ex iaculis quis. Morbi sollicitudin nulla eget odio pellentesque, sed cursus diam iaculis.</p>
              </div>
              <div id="tab4">
              <h4>SEO friendly</h4>
                <p>Duis risus nulla, elementum vitae nisi a, ornare maximus nisl. Morbi et vehicula est. Cras at vulputate justo. Cras eu nulla metus. Ut et pretium velit. Pellentesque at neque tristique.</p>
              </div>
            </section>
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

export default Home;