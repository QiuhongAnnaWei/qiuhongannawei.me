import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Awards</h2>

          <div className="subheading mb-2">Research</div>
          <ul className="fa-ul mb-5">
            {
              this.awards.Research.map((data, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faAward} color="#ffda85" /> <span className="ml-2"> {data.awardDetail} </span>
                </li>
              ))
            }
          </ul>

          <div className="subheading mb-2">Computer Science</div>
          <ul className="fa-ul mb-5">
            {
              this.awards.CS.map((data, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faAward} color="#ffda85" /> <span className="ml-2"> {data.awardDetail} </span>
                </li>
              ))
            }
          </ul>

          <div className="subheading mb-2">Math</div>
          <ul className="fa-ul mb-5">
            {
              this.awards.Math.map((data, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faAward} color="#ffda85" /> <span className="ml-2"> {data.awardDetail} </span>
                </li>
              ))
            }
          </ul>

        </div>
      </section>
    );
  }
}

export default Awards;
