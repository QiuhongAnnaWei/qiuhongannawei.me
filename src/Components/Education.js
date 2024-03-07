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
                    <span className="subheading mb-3">BS: Mathematics-Computer Science </span> 
                    </div> 
                    <div> 
                    <span className="subheading mb-3"> MS (<a href="https://college.brown.edu/sites/default/files/2022-02/Concurrent%20Degree%20Program%20Application--Revised%20August%202022.docx%20fillable.pdf" target="_blank" rel="noopener noreferrer">concurrent</a>): Computer Science </span>
                  </div> 
              
              <ul className="mb-2">
                <li> <span className="subsubheading2"> GPA </span>: 4.00/4.00 </li>
                <li> <span className="subsubheading2"> Relevant Coursework (Computer Science) </span>: 
                Computer Vision, Cryptography, Robust Algorithms for Machine Learning, Computer Graphics, Learning and Sequential Decision Making, Data Structures and Algorithms, Computer Systems, Computer Networks, Operating Systems, Computer Architecture, Software Engineering, Prescriptive Analytics. </li>
                <li> <span className="subsubheading2"> Relevant Coursework (Mathematics) </span>: 
                Probability, Statistics, Number Theory, Algebra, Graph Theory, Combinatorial Theory, Differential Equation, Real Analysis, Complex Analysis. </li>
                <li> <span className="subsubheading2"> Leadership & Service </span>: I am one of the department-appointed <a target="_blank" href="https://cs.brown.edu/people/meta-ura/"> Meta Undergraduate Research Asssistants</a>. at Brown Computer Science, for which I head efforts to facilitate undergraduate research. Specifically, I host events and serve as liaison between faculty and ~1200 CS students. </li>
                <li> <span className="subsubheading2"> Teaching </span>: I served as the teaching assistant for the first iterations of undergraduate coruse <a href="https://brownappliedcryptography.github.io/" target="_blank" rel="noopener noreferrer"> "Applied Cryptography"</a> and graduate course <a href="https://blog.cs.brown.edu/2022/09/19/novices-subject-matter-experts-how-2952-o-blurred-boundaries-between-robotics-cv-and-ml/" target="_blank" rel="noopener noreferrer"> "Advanced 3D Robot Perception"</a>.
                 </li>
                <li> <span className="subsubheading2"> Activities </span>: Moli East Asian Dance Company, Daebak Dance, Women in Computer Science (WiCS), Socially Responsible Investment Fund (SRIF), Brown Science Olympiad Event Coordinator. </li>
                <li>Took leave of absence in 2020-2021 due to COVID</li>
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
