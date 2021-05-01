import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          {
            this.experience.map((exp, index) => (
              
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">

                  <div> 
                    <span className="heading mb-0 left">{exp.position} </span>
                    <span className="resume-date text-md-right subsubheading2 right">{exp.fromDate} - {exp.toDate}</span>
                  </div>
                  <div> 
                    <span className="subheading mb-3">{exp.organization} </span>
                    <span className="subsubheading1 mb-3">{exp.organizationDesc}</span>
                  </div> 

                  <ul className=" mb-0">
                    { exp.aboutWork.map((item, index) => (<li> {item} </li>))}
                  </ul>

                </div>

                

                {/* <div className="resume-date text-md-right">
                  <span className="subsubheading2">{exp.fromDate} - {exp.toDate}</span>
                </div> */}
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Experience;
