import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faPager, faFileAlt, faVideo } from "@fortawesome/free-solid-svg-icons";
import network from '../Assets/network.png';
import gooey1 from '../Assets/gooey1.png';
import toolkit1 from '../Assets/toolkit1.png';
import zoom1 from '../Assets/zoom1.jpg';
import name1 from '../Assets/name1.png';
import weenixfilesystem from '../Assets/weenixfilesystem.png';
import Crepusculum1 from '../Assets/Crepusculum1.png';
import Crepusculum2 from '../Assets/Crepusculum2.png';
import cpu from '../Assets/cpu.png';



class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mb-2 mr-2"> Network Stack </span>
                <span className="social-icons-small">
                  <a title="Information" className="mr-2" href="http://merlot.usc.edu/cs402-m19/prepare-kernel/weenix-documentation.pdf" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faFileAlt} /> </a>
                </span>
              </div>
              <div className="subheading mb-0" href=""> Virtual network stack consisting of link, network, transport, and application layers </div>
              <div className="subsubheading1 mb-0" href=""> Go, Docker, Wireshark </div>
              <ul className="mb-2">
                <li> Built the following from scratch:  </li>
                <ul>
                  <li> link layer (using UDP) </li>
                  <li> IP forwarding </li>
                  <li> Routing Information Protocol </li>
                  <li> RFC-compliant TCP (supports features including out-of-order packet handling, retransmission, zero-window probing)</li>
                  <li> command line applications </li>
                </ul>
              </ul>
              <img className="mt-1 mb-2 mx-4" height="320px" src={network} alt=""></img>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mb-2 mr-2"> Weenix Operating System </span>
                <span className="social-icons-small">
                  <a title="Information" className="mr-2" href="http://merlot.usc.edu/cs402-m19/prepare-kernel/weenix-documentation.pdf" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faFileAlt} /> </a>
                </span>
              </div>
              <div className="subheading mb-0" href=""> A full-fledged mini Unix-like operating system </div>
              <div className="subsubheading1 mb-0" href=""> C, GDB, SSH </div>

              <ul className="mb-2">
                <li>Implemented the following:</li>
                <ul>
                  <li> Threads, processes, synchronization primitives. </li>
                  <li> Device drivers for terminals, disks, memory devices. </li>
                  <li> Virtual File System (polymorphic file system support). </li>
                  <li> System V File System (a Unix file system). </li>
                  <li> Virtual Memory which enables running user-level code (VM maps, page fault handling, memory management via anonymous objects and shadow objects, system calls including fork). </li>
                </ul>
              </ul>
              <img className="mt-1 mb-2 mx-4" height="280px" src={weenixfilesystem} alt=""></img>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mt-3 mb-2 mr-2"> Single-Cycle Processor </span>
                <span className="social-icons-small">
                </span>
              </div>
              <div className="subheading mb-0" href=""> Self-designed processor with essential instruction set </div>
              <div className="subsubheading1 mb-0" href=""> Verilog, Assembly, Machine Code, Quartus, iVerilog Simulation, ModelSim </div>
              <ul className="mb-2">
                <li> Designed, implemented, booted, and optimized a single-cycle RISC-V processor on Cyclone V FPGA, with components including ROM, RAM, clocks with phase-locked loop, register files, program counter, ALU, datapath. Achieved clock rate of 64 MHz. </li>
                <li> Supports arithmetic instructions (add, addi, sub, mul, slli), logical instructions (and, or), memory instructions (lw, sw), conditional branching instructions (beq, bne), and procedure call instructions (jal, jalr). </li>
              </ul>
              <img className="mt-1 mb-2" height="350px" src={cpu} alt=""></img>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mt-3 mb-2 mr-2"> Gooey </span>
                <span className="social-icons-small">
                  <a title="Source Code" className="mr-2" href="https://github.com/QiuhongAnnaWei/gooey" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /> </a>
                  <a title="Demo" className="mr-2" href="https://www.youtube.com/watch?v=BCt0nq0TOCU" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faVideo} /> </a>
                  {/* <a title="Website" className="mr-2" href="https://powerful-forest-21960.herokuapp.com/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faPager} /> </a> */}
                  <a title="Algorithm Description" className="mr-2" href="https://docs.google.com/document/d/1ts_QSpuJDQqgbBVtceSGiOymGBzZEkaK5yIBBx2hbGw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faFileAlt} /> </a>
                </span>
              </div>
              <div className="subheading mb-0" href=""> ML-powered graphic design web app that streamlines stylesheet making </div>
              <div className="subsubheading1 mb-0" href=""> React, Flask, Firebase Firestore, Heroku, Git, Jupyter </div>

              <ul className="mb-2">
                <li> Collaborated with 3 others on ideating, prototyping, developing, testing, and deploying Gooey. </li>
                <li> Individually invented backend Python algorithm that gives stylesheet palette recommendations based on user preference and color theory by leveraging user-specific soft clustering (Gaussian mixture model) and self-developed heuristics such as hue-shift index. </li>
                <li> Integrated algorithm, user auth, database logic with a modular, extensible frontend; wrote relevant unit tests that achieved 92% coverage. </li>
              </ul>
              <img className="mt-1 mb-2" height="300px" src={gooey1} alt=""></img>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mt-3 mb-2 mr-2"> Computer Vision Toolkit  </span>
              </div>
              <div className="subheading mb-0" href=""> All-in-one Python program with diverse vision capabilities </div>
              <div className="subsubheading1 mb-0" href=""> TensorFlow, Google Cloud, numpy, skimage, scipy, sklearn, matplotlib</div>

              <ul className="mb-2">
                <li> Implemented feature matching (Harris Corner Detector + SIFT feature), camera calibration (using Random Sample Consensus method), scene classification (Bag of Words model + linear SVM), hybrid image. </li>
                <li> Designed, trained, tested classification CNN (accuracy &gt 86%) and CycleGAN for object transfiguration. </li>
              </ul>
              <img className="mt-1 mb-2" height="250px" src={toolkit1} alt=""></img>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mb-2 mr-2"> Crepusculum </span>
                <span className="social-icons-small">
                  <a title="website" className="mr-2" href="https://crepusculum.web.app/." target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faPager} /> </a>
                </span>
              </div>
              <div className="subheading mb-0" href=""> A real-time city generator </div>
              <div className="subsubheading1 mb-0" href=""> GLSL, React, Three.js </div>
              <ul className="mb-2">
                <li> Generated and rendered city in real time with changing time, evolving sky, and moving cars.</li>
                <li> See the website for more! </li>
              </ul>
              <img className="mt-2 mb-2" height="270px" src={Crepusculum1} alt=""></img>
              <img className="mt-2 mb-2" height="270px" src={Crepusculum2} alt=""></img>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mt-3 mb-2 mr-2"> Zoom and Enhance </span>
                <span className="social-icons-small">
                  <a title="Source Code" className="mr-2" href="https://github.com/crown523/zoom_and_enhance" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /> </a>
                  {/* <a title="Website" className="mr-2" href="https://zoomandenhance.herokuapp.com/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faPager} /> </a> */}
                  <a title="DEVPOST" className="mr-2" href="https://devpost.com/software/zoom-and-enhance-v6t3qy" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faDev} /> </a>
                </span>
              </div>
              <div className="subheading mb-0" href=""> Web app for NLP-supported efficient video notetaking </div>
              <div className="subsubheading1 mb-0" href=""> Vue.js, Bootstrap, Heroku </div>

              <ul className="mb-2">
                <li> Implemented multi-language speech-to-text, rapid NLP keyword extraction, streaming-site embedding, and real-time flexible styling. </li>
                <li> Hack@Home Best Web-Based Application and Best Professional Hack Finalist. </li>
              </ul>
              <img className="mt-1 mb-0" height="300px" src={zoom1} alt=""></img>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div>
                <span className="heading mb-2 mr-2"> Hi, My Name is… </span>
                <span className="social-icons-small">
                  <a title="DEVPOST" className="mr-2" href="https://devpost.com/software/hi-my-name-is" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faDev} /> </a>
                </span>
              </div>
              <div className="subheading mb-0" href=""> A DL-powered web app for generating tailored creative names </div>
              <div className="subsubheading1 mb-0" href=""> Google Colab, Python, Flask, HTML, CSS, JavaScript </div>

              <ul className="mb-2">
                <li> Trained a recurrent neural network with top US baby names from 2015-2019, and developed the capacity to generate names with user-input prefix and desired uniqueness level (implemented with model temperature). </li>
                <li> Created algorithm to output names of similar pronunciation as specified word by making use of the Soundex algorithm, cosine similarity, and bag of words model. </li>
              </ul>
              <img className="mt-1" height="250px" src={name1} alt=""></img>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Projects;
