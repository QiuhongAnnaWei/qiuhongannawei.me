import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">

          <h1 className="mb-0">
            {this.landingData.firstName} {this.landingData.lastName}
          </h1>

          <div className="subheading mb-5">
            <a className = "text-primary" href="mailto:qiuhong.anna.wei@gmail.com">qiuhong.anna.wei@gmail.com</a>
            <span> | </span>
            <a className = "text-primary" href="mailto:qiuhong_wei@brown.edu"> qiuhong_wei@brown.edu </a>
          </div>

          {/* <p className="lead mb-5">{this.landingData.bio}</p> */}
          <p className="lead mb-5">
            Hi! My name is Anna, and I am an engineer and researcher passionate about solving problems and creating impact through technology. 
            <br/><br/>
            I am currently a Computer Science-Applied Math student <a href='https://www.brown.edu/' target="_blank" rel="noopener noreferrer">Brown University</a> and
            a researcher in the <a href="https://visual.cs.brown.edu/" target="_blank" rel="noopener noreferrer"> Brown Visual Computing group</a>. 
            Outside of class, I enjoy dancing, backpacking, as well as reading and writing Chinese poetry.
            <br/><br/>
            Feel free to send me an email or reach out on LinkedIn if you'd like to chat!
          </p>
          
          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a>
            <a href={this.landingData.github} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /> </a>
          </div>

        </div>
      </section>
    );
  }
}

export default Landing;
