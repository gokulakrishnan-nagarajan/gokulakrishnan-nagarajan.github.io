import dp from './assets/images/Tidel Lawn Pic 630x630.jpg';

import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './App.scss';

function App() {
  return (
    <div className="app-container flex-row">
      <div className="img-container center-center">
        <img src={dp}></img>
      </div>
      <div className="content flex-grow-1 flex-column-ver-center">
        <div className="name gradient-text">GokulaKrishnan T N</div>
        <div className="desc">Front-end developer with 5 years of experience - ReactJS (Redux Toolkit), Node.js (ExpressJS), Socket.IO, Plotly & D3 (Data Visualisation), nw.js (Node-Webkit) and MySQL</div>
        <div className="my-work-title gradient-text">My Work</div>
        <div className="my-work-list flex-center">
          <a href="https://gokulakrishnan-nagarajan.github.io/calcuplay/" target="_blank">CalcuPlay</a>
          <a href="https://gokulakrishnan-nagarajan.github.io/easycrypt/" target="_blank">EasyCrypt</a>
          <a href="https://gokulakrishnan-nagarajan.github.io/instaresume/" target="_blank">InstaResume</a>
          <a href="https://gokulakrishnan-nagarajan.github.io/solarsystem/" target="_blank">Solar System</a>
        </div>
        <div className="contact-section">
          <div className="contact-info-item flex-center">
            <span class="contact-info-icon center-center gradient-text"><i class="fa fa-envelope" aria-hidden="true"></i></span>
            <span class="contact-info-title">gokulakrishnantn@gmail.com</span>
          </div>
          <div className="contact-info-item flex-center">
            <span class="contact-info-icon center-center gradient-text"><i class="fa fa-mobile" aria-hidden="true"></i></span>
            <span class="contact-info-title">+91-8807-853-764</span>
          </div>
          <div className="contact-info-item flex-center">
            <span class="contact-info-icon center-center gradient-text"><i class="fa fa-location-arrow" aria-hidden="true"></i></span>
            <span class="contact-info-title">Coimbatore</span>
          </div>
          <div className="contact-info-item flex-center">
            <span class="contact-info-icon center-center gradient-text"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
            <span class="contact-info-title"><a href="http://www.linkedin.com/in/gokulakrishnan-nagarajan" target="_blank">linkedin.com/in/gokulakrishnan-nagarajan</a></span>
          </div>
          <div className="contact-info-item flex-center">
            <span class="contact-info-icon center-center gradient-text"><i class="fa fa-github" aria-hidden="true"></i></span>
            <span class="contact-info-title"><a href="https://gokulakrishnan-nagarajan.github.io/" target="_blank">gokulakrishnan-nagarajan.github.io</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
