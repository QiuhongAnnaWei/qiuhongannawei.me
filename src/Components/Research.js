import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDev } from "@fortawesome/free-brands-svg-icons";
import { faPager, faFileAlt } from "@fortawesome/free-solid-svg-icons";

import legonet1 from '../Assets/legonet1.png';
import marl from '../Assets/marl.png';
import ppml2 from '../Assets/ppml2.png';
import dvh from '../Assets/dvh.png';
import PINN1 from '../Assets/PINN1.png';
import PINN2 from '../Assets/PINN2.png';



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

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 mr-2"> LEGO-Net: Learning Regular Rearrangements of Objects in Rooms </span>
                <span className="social-icons-small"> 
                  <a title="Website" className="mr-2 mt-2 top" href="https://ivl.cs.brown.edu/#/projects/lego-net" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faPager} /> </a> 
                  <a title="Paper" className="mr-2 mt-2" href="https://arxiv.org/abs/2301.09629" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faFileAlt} /> </a> 
                  <a title="Code" className="mr-2 top" href="https://github.com/QiuhongAnnaWei/LEGO-Net/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /> </a>
                </span>
              </div>
              <div> 
                Qiuhong Anna Wei, Sijie Ding, Jeong Joon Park, Rahul Sajnani, Adrien Poulenard, Srinath Sridhar, Leonidas Guibas <br/>
                <span className="resume-date subsubheading2"> CVPR 2023 </span>
              </div>

              <ul className=" mb-0">
                <li> LEGO-Net is a data-driven transformer-based iterative method for LEarning reGular rearrangement of Objects in messy rooms. </li>
                <li>Partly inspired by diffusion models, LEGO-Net starts with an initial messy state and iteratively “denoises” the position and orientation of objects to a regular state while reducing distance traveled.</li>
                <li>I won the <a href="https://awards.cs.brown.edu/2023/03/20/anh-truong-and-qiuhong-wei-win-randy-f-pausch-computer-science-undergraduate-summer-research-award/" target="_blank" rel="noopener noreferrer"> 2023 Randy F. Pausch Computer Science Summer Research Award</a> to continue my work!
                </li>

              </ul>
              <img className="mt-2 mb-2"  height="300px" src={legonet1} alt=""/>

            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 left">3D Computer Vision and Machine Learning</span>
                <span className="resume-date text-md-right subsubheading2 right"> Mar 2021-Present </span>
              </div>
              
              <a className="subheading" href="https://ivl.cs.brown.edu/" target="_blank" rel="noopener noreferrer">Brown Interactive 3D Vision & Learning Lab </a> <br/>
              <a className="subsubheading1 mb-3" target="_blank" rel="noopener noreferrer"> Advisor: Prof. Srinath Sridhar </a> <br/>

              Past Projects:
              <ul className=" mb-0">
                <li> Integrated deep learning and shape-from-silhouette 3D visual hull reconstruction to solve traditional concavity and occlusion challenges, leveraging projective geometry for self-supervision </li>
                <li> Built encoder-decoder for segmentation and occupancy modeling with ShapeNet dataset, PyTorch, OpenCV, numpy, tk3dv, Colab </li>
                {/* Integrated deep learning with shape-from-silhouette 3D reconstruction using ShapeNet dataset, PyTorch, OpenCV, numpy, tk3dv, Colab */}
                {/* Investigating multi-object canonical arrangement, particularly a data-driven transformer-based iterative method partly inspired by diffusion models (LEGO-Net), which has shown to reliably rearrange complex scenes and outperform other methods. */}
                <img className="mt-0"  height="260px" src={dvh} alt=""/>
              </ul>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 mr-2"> Privacy-Perserving Machine Learning </span>
                <span className="social-icons-small"> 
                  <a title="Paper" className="mr-2 mt-2" href="https://cs.brown.edu/people/ycheng79/csci2952qf22/Top_Project_5_Anna%20Wei_Andy%20Liu_Privacy-Preserving%20Machine%20Learning.pdf" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faFileAlt} /> </a> 
                  {/* https://drive.google.com/file/d/1kAor9nd0r4n1dNIKm11W6Zd3EoD-Z7Kl/view?usp=sharing */}
                </span>
                <span className="resume-date text-md-right subsubheading2 right"> 2022 </span>
              </div>

              <a className="subheading" href="https://mapps-brown.github.io/workshop2023/" target="_blank" rel="noopener noreferrer">Center for Mobility Analysis for Pandemic Prevention Strategies (MAPPS) </a>  <br/>
              <a className="subsubheading1 mb-3" target="_blank" rel="noopener noreferrer"> Advisor: Prof. Anna Lysyanskaya, Prof. Yu Cheng </a> <br/>

              <ul className=" mb-0">
                <li> Improved, implemented, analyzed, and conducted experiements with the secure aggregation protocol proposed by Bonawitz et al. that leverages secure multiparty computation to advance privacy-preserving machine learning, in order to compute mean of model updates from multiple clients in a secure manner, while maintaining efficiency and enabling robustness to client drop-outs.</li>
                <li> Top project and top reviewer for <a href="https://cs.brown.edu/people/ycheng79/csci2952qf22.html" target="_blank" rel="noopener noreferrer"> CSCI 2952-Q: Robust Algorithms for Machine Learning</a>. </li>
              </ul>
              <img className="mt-2 mb-2"  height="350px" src={ppml2} alt=""/>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 mr-2"> Multi-Agent Reinforcement Learning </span>
                <span className="social-icons-small"> 
                  <a title="Source Code" className="mr-2 top" href="https://github.com/QiuhongAnnaWei/MultiAgent-PositronicLizards" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /> </a> 
                </span>
                <span className="resume-date text-md-right subsubheading2 right"> 2021 </span>
              </div>

              <a className="subsubheading1 mb-3" target="_blank" rel="noopener noreferrer"> Advisor: Prof. Michael Littman, Kaiyu Zheng </a> <br/>

              {/* <div class="flexcontainer">  */} {/* for putting it side by side */}
              <ul className="mb-0">
                <li> Explored the unconventional setting of adversarial multi-agent teams in Partially Observable Stochastic Games </li> 
                <li> Designed game environments of multi-agent non-zero-sum games, and investigated the impact and performance of various training methodologies, leveraging Proximal Policy Optimization. </li>
                {/* trained policies with Proximal Policy Optimization */}
                {/* Ray, PettingZoo, TensorFlow, Tune, SuperSuit */}
              </ul> 
              <img className="mt-3" height="300px" src={marl} alt=""/>
              {/* </div> */}

            </div>
          </div>



          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 left">3D Modeling and Synthesis</span>
                <span className="resume-date text-md-right subsubheading2 right">July 2021 - Oct 2021</span>
              </div>
              <div> 
                <span className="subheading mb-3" >Chinese University of Hong Kong - Hong Kong University of Science and Technology </span>
              </div> 
              <ul className=" mb-0">
                <li> Researched novel view synthesis and human rendering from sparse input images with implicit neural fields  </li>
                <li> Developed across servers and integrated diverse packages (e.g. OpenPose, SMPL) with conda, PyTorch distributed, CUDA, Slurm, SSH, Git, vi  </li>
              </ul>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 mr-2"> Physics Informed Neural Networks </span>
                <span className="social-icons-small"> 
                  <a title="Paper" className="mr-2 mt-2" href="https://drive.google.com/file/d/1Vg-x73DVXiITuXdiAB1dLg7KoxPY8Tq3/view?usp=sharing" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faFileAlt} /> </a> 
                  <a title="Source Code" className="mr-2 top" href="https://github.com/QiuhongAnnaWei/PINNs" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /> </a> 
                </span>
                <span className="resume-date text-md-right subsubheading2 right"> Sep 2020 - Dec 2020 </span>
              </div>

              <a className="subheading" href="https://www.dam.brown.edu/drp/" target="_blank" rel="noopener noreferrer">Brown Applied Math Honors Directed Reading Program </a> <br/>
              <a className="subsubheading1 mb-3 " href="" target="_blank" rel="noopener noreferrer"> Advisor: Enrui Zhang, Prof. George Karniadakis</a> <br/>


              <ul className=" mb-0">
                <li> Analyzed and implemented deep neural networks that encode physical laws to solve forward and inverse problems involving differential equations; achieved relative error of 0.3 %; generated visualizations and presented; used Python, TensorFlow, matplotlib</li>
                <img className="mt-3" height="260px" src={PINN1} alt=""/>
                <img className="mt-3" height="270px" src={PINN2} alt=""/>

              </ul>
            </div>
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div> 
                <span className="heading mb-0 left"> Multimodal Vision-Language Learning</span>
                <span className="resume-date text-md-right subsubheading2 right">Mar 2021 - May 2022 </span>
              </div>
              <div> 
                <a className="subheading mb-3" href="?" target="_blank" rel="noopener noreferrer">Brown Perception, Action, and Cognitio Lab </a>
                <a className="subsubheading1 mb-3 ml-3" href="" target="_blank" rel="noopener noreferrer"> Advisor: Prof. Chen Sun </a>
              </div> 
              <ul className=" mb-0">
                <li> Examined graph neural networks (transformer, interaction net) for reinforcement learning and multimodal application </li>
              </ul>
            </div>
          </div> */}
        
        
          {/* this.research.map((exp, index) => (
            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <div> 
                  <span className="heading mb-0 left">{exp.position} </span>
                  <span className="resume-date text-md-right subsubheading2 right">{exp.fromDate} - {exp.toDate}</span>
                </div>
                <div> 
                  <a className="subheading mb-3" href={exp.organizationLink} target="_blank" rel="noopener noreferrer">{exp.organization} </a>
                  <a className="subsubheading1 mb-3" href={exp.organizationDescLink} target="_blank" rel="noopener noreferrer">{exp.organizationDesc} </a>
                </div> 
                // </section> <p>{exp.aboutWork}</p>
                <ul className=" mb-0">
                  {exp.aboutWork.map((item, index) => (<li key={index}> {item} </li>))}
                </ul>
              </div>
            </div>
          ))  */}
          
        </div>
      </section>
    );
  }
}

export default Research;
