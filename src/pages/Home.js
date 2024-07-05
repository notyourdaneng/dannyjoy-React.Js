import "./Home.css";

import dannyjoy from "../img/danny joy.jpg";
import visualcode from "../img/visual.013.webp";
import designer from "../img/des.014.webp";
import multimedia from "../img/mul.015.webp";
import graphic from "../img/gra.016.webp";
import company from "../img/com.017.webp";
import collage from "../img/tech.019.webp";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">


            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold">
                        Danny Joy
                      </h1>
                      <br />
                      <p className="self text-light">
                       I'm a graphic designer and multimedia expert passionate about crafting compelling visual experiences. 
                        With expertise in Visual Studio Code, I excel in creating impactful graphics, multimedia content, and user-friendly interfaces. 
                        Let's collaborate to bring your ideas to life through innovative design solutions.
                        "I'm a Business Woman and a Dreamer".
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={dannyjoy}
                        alt="Profile Picture of Danny Joy Vidal Macahilig"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={designer} alt="" />
                <h4 className="text-center">Graphic Designer</h4>
                <i><p>
                  In IT, a web designer is a professional who specializes in creating the visual elements and user interface of websites,
                  using skills in graphic design, HTML, CSS, and often JavaScript, to ensure the site is both
                  aesthetically pleasing and functional for users.
                </p></i>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={visualcode} alt="" />
                <h4 className="text-center">Visual Studio Code</h4>
                <i><p>
                  Visual Studio Code (VS Code) is a free source-code editor
                  developed by Microsoft for Windows, macOS, and Linux. It has
                  quickly become one of the most popular code editors in the
                  developer community due to its versatility, extensive
                  features, and customizable nature
                </p></i>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={multimedia} alt="" />
                <h4 className="text-center">Multimedia Expert</h4>
                <i><p>
                  A multimedia specialist expertly blends different digital media formats
                  like text, graphics, animations, audio, and video to create engaging
                  content for various digital platforms such as presentations, websites,
                  apps, and other forms of digital communication.
                </p></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="radio-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="radio-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(165,0,165)" />
        </g>
        <g className="radio-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(165,0,165, .5)" />
        </g>
        <g className="radio-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(165,0,165, .3)" />
        </g>
      </svg>

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3">
              <h1 className="text display-4 fw-bold"><center> My Sample  Design <br /></center> </h1>
            </h3>
            <div className="col-lg-7 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3">*Graphic Design</h4>
                <img src={graphic} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">*Calling Card </h4>
                <img src={company} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">
                  *Digital Collage
                </h4>
                <img src={collage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>By
              <a href=""> Danny Joy Vidal Macahilig</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
