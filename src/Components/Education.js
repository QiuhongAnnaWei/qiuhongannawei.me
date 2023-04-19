import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                  <div> 
                    <span className="heading mb-0 left">Brown University <span className="subsubheading1">Providence, RI</span></span>
                    <span className="resume-date text-md-right subsubheading2 right">Expected May 2024</span>
                  </div>
                  <div> 
                    <span className="subheading mb-3">BS: Computer Science-Mathematics, MS (concurrent): Computer Science </span>
                  </div> 
              
              <ul className="mb-2">
                <li> <span className="subsubheading2"> GPA </span>: 4.00/4.00 </li>
                <li> <span className="subsubheading2"> Relevant Coursework </span>: 
                Data Structures, Algorithms, Computer Vision, Computer Graphics, Cryptography and Security, Artificial Intelligence, Robust Algorithms for Machine Learning, Operating Systems, Design and Engineering of Computing Systems, Software Engineering, Learning and Sequential Decision Making, Probability, Statistics, Discrete Math, Differential Equations, Prescriptive Analytics, Graph Theory and Algorithms, Abstract Algebra, Number Theory, Analysis, Combinatorial Theory
                </li>
                <li> <span className="subsubheading2"> Leadership & Service </span>: I am one of the department-appointed <a target="_blank" href="http://ur.cs.brown.edu/"> Meta Undergraduate Research Asssistants</a>. at Brown Computer Science, for which I head efforts to facilitate undergraduate research. Specifically, I host events and serve as liaison between faculty and ~1200 CS students. </li>
                <li> <span className="subsubheading2"> Teaching </span>: I am a teaching assistant for Applied Cryptography and graduate-level course on <a href="https://blog.cs.brown.edu/2022/09/19/novices-subject-matter-experts-how-2952-o-blurred-boundaries-between-robotics-cv-and-ml/" target="_blank" rel="noopener noreferrer"> Advanced 3D Robot Perception</a>.
                 </li>
                <li> <span className="subsubheading2"> Activities </span>: Women in Computer Science (WiCS), Daebak Dance, Socially Responsible Investment Fund (SRIF), Brown Science Olympiad Event Coordinator </li>
              </ul>
              </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                  <div> 
                    <span className="heading mb-0 left">Concordia International School Shanghai <span className="subsubheading1">Shanghai, China</span></span>
                    <span className="resume-date text-md-right subsubheading2 right">May 2019</span>
                  </div>
                  <div> 
                    <span className="subheading mb-3">High School Diploma </span>
                  </div> 
              
              <ul className="mb-2">
                <li> <span className="subsubheading2"> GPA </span>: 3.99/4.00 </li>
                <li> <span className="subsubheading2"> Relevant Coursework </span>: Multivariable Calculus, Linear Algebra, Computer Science, Statistics </li>
                <li> <span className="subsubheading2"> Leadership & Service </span>: Varsity Dance captain, Student Council Vice President, Chinese migrant children dance education program founder and 6-year volunteer dance teacher, Math Team founding member, Model United Nations Secretary General </li>
              </ul>
              </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Education;
