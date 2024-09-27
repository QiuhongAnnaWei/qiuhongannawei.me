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
            <span className = "subsubheading1">qiuhong (dot) anna (dot) wei (at) gmail (dot) com </span>  
            {/*  href="mailto:qiuhong.anna.wei@gmail.com" */}
            <span> |  </span> 
            <span className = "subsubheading1"> qiuhongw (at) andrew (dot) cmu (dot) edu </span>
            {/*  href="mailto:qiuhong_wei@brown.edu" */}
          </div>

          {/* <p className="lead mb-5">{this.landingData.bio}</p> */}
          <p className="lead mb-5">
            I am a PhD student in the Machine Learning Department at Carnegie Mellon University. 
            <br/><br/>
            
            Previously, I completed a Bachelor's in Mathematics-Computer Science and a <a href="https://college.brown.edu/sites/default/files/2022-02/Concurrent%20Degree%20Program%20Application--Revised%20August%202022.docx%20fillable.pdf" target="_blank" rel="noopener noreferrer">concurrent</a> Master's in Computer Science from Brown University, where I worked in <a href="https://visual.cs.brown.edu/" target="_blank" rel="noopener noreferrer"> Visual Computing</a> and <a href="http://theory.cs.brown.edu/" target="_blank" rel="noopener noreferrer"> Theoretical Computer Science</a>. 
            I was fortunate to be advised by
            <a href="https://cs.brown.edu/people/ssrinath/" target="_blank" rel="noopener noreferrer"> Srinath Sridhar</a>, 
            <a href="https://geometry.stanford.edu/" target="_blank" rel="noopener noreferrer"> Leonidas Guibas</a>, 
            <a href="https://sites.google.com/view/peihanmiao/home" target="_blank" rel="noopener noreferrer"> Peihan Miao</a>, and
            <a href="https://cs.brown.edu/people/alysyans/" target="_blank" rel="noopener noreferrer"> Anna Lysyanskaya</a>.
            Additionally, I served as one of the department-appointed <a target="_blank" href="https://cs.brown.edu/people/meta-ura/"> Meta Undergraduate Research Asssistants</a>, for which I led efforts to facilitate undergraduate research. 
            I have also spent time at Meta Reality Lab as an intern. 
            {/* In general, I am passionate about solving challenging problems and creating impact through technology. */}
            
            <br/><br/>
            Outside of CS and math, I enjoy dancing, writing, music, and exploring nature.
            
            {/* <br/><br/> */}
            {/* Feel free to reach out to me through email or on LinkedIn if you'd like to chat! */}
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
