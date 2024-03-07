import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

          <div className="mt-2 mb-5">
            <span className = "subsubheading1">qiuhong (dot) anna (dot) wei (at) gmail (dot) com</span>  
            {/*  href="mailto:qiuhong.anna.wei@gmail.com" */}
            <span> | </span>
            <span className = "subsubheading1"> qiuhong_wei (at) brown (dot) edu </span>
            {/*  href="mailto:qiuhong_wei@brown.edu" */}
          </div>

          {/* <p className="lead mb-5">{this.landingData.bio}</p> */}
          <p className="lead mb-5">
            I am a Mathematics-Computer Science student at <a href='https://www.brown.edu/' target="_blank" rel="noopener noreferrer">Brown University</a> and
            a researcher in <a href="https://visual.cs.brown.edu/" target="_blank" rel="noopener noreferrer"> Brown Visual Computing</a> and <a href="http://theory.cs.brown.edu/" target="_blank" rel="noopener noreferrer"> Theoretical Computer Science at Brown</a>. 
            I have also spent time at Meta Reality Lab as an intern. 
            In general, I am passionate about solving challenging problems and creating impact through technology.
            <br/><br/>
            Outside of CS and math, I enjoy dancing, writing, music, and exploring nature.
            <br/><br/>
            Feel free to reach out to me through email or on LinkedIn if you'd like to chat!
          </p>
          
          <div className="social-icons">
            <a href={this.landingData.github} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /> </a>
            <a href={this.landingData.googleScholar} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGoogle} /> </a>
            <a href={this.landingData.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a>
          </div>

        </div>
      </section>
    );
  }
}

export default Landing;
