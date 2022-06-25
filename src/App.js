import dp from "./assets/images/Tidel Lawn Pic 630x630.jpg";

import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./App.scss";

function App() {
  return (
    <div className="app-container flex-row">
      <div className="img-container center-center">
        <img src={dp} alt=""></img>
      </div>
      <div className="content flex-grow-1 flex-column-ver-center">
        <div className="name gradient-text">GokulaKrishnan T N</div>
        <div className="desc">
          Software Engineer with 6 years of experience in Web Technology -
          ReactJS, Next.js, ReduxToolkit, Angular, RxJS, Sass, Plotly & D3 (Data
          Visualisation), Node.js (ExpressJS) and MongoDB
        </div>
        <div className="my-work-title gradient-text">My Work</div>
        <div className="my-work-list flex-center flex-wrap">
          <a
            href="https://cryptic-beach-85386.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            DevConnector
          </a>
          <a
            href="https://gokulakrishnan-nagarajan.github.io/calcuplay/"
            target="_blank"
            rel="noreferrer"
          >
            CalcuPlay
          </a>
          <a
            href="https://gokulakrishnan-nagarajan.github.io/easycrypt/"
            target="_blank"
            rel="noreferrer"
          >
            EasyCrypt
          </a>
          <a
            href="https://gokulakrishnan-nagarajan.github.io/instaresume/"
            target="_blank"
            rel="noreferrer"
          >
            InstaResume
          </a>
          <a
            href="https://gokulakrishnan-nagarajan.github.io/solarsystem/"
            target="_blank"
            rel="noreferrer"
          >
            Solar System
          </a>
        </div>
        <div className="contact-section">
          <div className="contact-info-item flex-center">
            <span className="contact-info-icon center-center gradient-text">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <span className="contact-info-title">
              gokulakrishnantn@gmail.com
            </span>
          </div>
          <div className="contact-info-item flex-center">
            <span className="contact-info-icon center-center gradient-text">
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </span>
            <span className="contact-info-title">+91-8807-853-764</span>
          </div>
          <div className="contact-info-item flex-center">
            <span className="contact-info-icon center-center gradient-text">
              <i className="fa fa-location-arrow" aria-hidden="true"></i>
            </span>
            <span className="contact-info-title">Coimbatore</span>
          </div>
          <div className="contact-info-item flex-center">
            <span className="contact-info-icon center-center gradient-text">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </span>
            <span className="contact-info-title">
              <a
                href="http://www.linkedin.com/in/gokulakrishnan-nagarajan"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/gokulakrishnan-nagarajan
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
