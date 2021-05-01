import React, { Component } from 'react';

class Research extends Component {
  constructor(props) {
    super(props);

    this.research = props.research;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="research">
        <div className="w-100">
          <h2 className="mb-5">Research</h2>
          {
            this.research.map((exp, index) => (
              
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">

                  <div> 
                    <span className="heading mb-0 left">{exp.position} </span>
                    <span className="resume-date text-md-right subsubheading2 right">{exp.fromDate} - {exp.toDate}</span>
                  </div>

                  <div> 
                    <a className="subheading mb-3" href={exp.organizationLink}>{exp.organization} </a>
                    <a className="subsubheading1 mb-3" href={exp.organizationDescLink}>{exp.organizationDesc} </a>
                    {/* <span className="subsubheading1 mb-3">{exp.organizationDesc}</span> */}
                  </div> 

                  {/* <p>{exp.aboutWork}</p> */}
                  <ul className=" mb-0">
                    {
                      exp.aboutWork.map((item, index) => (<li> {item} </li>))
                    }
                  </ul>

                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Research;
