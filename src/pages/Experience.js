import "./Experience.css";
import Navbar from "./Navbar";

import ISD from "../img/i.007.webp";
import print from "../img/p.004.webp";
import setup from "../img/s.005.webp";
import repair from "../img/r.003.webp";
import visit from "../img/v.006.webp";
import dessasemble from "../img/d.008.webp";
import anniversary from "../img/a.011.webp";
import RAM from "../img/ram.020.webp";



const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">

            <div id="exprience-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="info">
            
      <div class="text-center">
      <h1 className="text display-4 fw-bold"><center>My Experiences<p className="display-6"></p></center></h1>
        <div className="container">
          <div className="row">
            
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={ISD} alt="" />
                <h4 className="text-center">Giving Certificate together with our OJT Coordinator</h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={print} alt="" />
                <h4 className="text-center">Fixing the Problem of Printer</h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={dessasemble} alt="" />
                <h4 className="text-center">Assemble and Dissassemble of System Unit</h4>
              </div>
            </div>
            
          </div>
        </div> </div>

        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={repair} alt="" />
                <h4 className="text-center">Repairing Laptop</h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={visit} alt="" />
                <h4 className="text-center">First Visit of Ma'am Debbie</h4>
              </div>
            </div>
            
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={RAM} alt="" />
                <h4 className="text-center">Upgrading the RAM</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
            <hr />
          </div>
      
          <div class="isotope">
            <div class="row">
            <h1 className="text display-4 fw-bold"><center>During My On-the- Job Training<p className="display-6"></p></center></h1>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={dessasemble} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={print} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={setup} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={repair} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr /> 
          

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={visit} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={ISD} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

          

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={anniversary} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Experience By :
              <a href="#">Danny Joy Vidal Macahilig</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
