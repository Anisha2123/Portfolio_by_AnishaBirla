import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import i1 from './images/i1.jpeg';
import i2 from './images/i2.jpeg';
import i3 from './images/photuu.png';
import git from './images/git.png'
import ln from './images/ln.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { cibLeetcode } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
      <div className="left">
        Anisha
        </div>
      <div className="right">
        <a>Home</a>
        <a>Projects</a>
        <a>Experience</a>
        <a>Profiles</a>
        <button>Resume</button>
      </div>
     </nav>
     <section className="about">
     <div className="left">
<ul>
<li>Expertise in building dynamic web applications.</li>
<li> 350+ LeetCode problems (Top 15%)</li>
<li> 5-star rated on Fiverr, actively securing and delivering quality projects on Freelancer.com.</li>
<li>GirlScript Summer of Code 2024.</li>
<li>Proficient in React.js, Node.js, MongoDB, Python, SQL, TailwindCSS, and more.</li>
</ul>
<div className="social-icons">
  <a href="https://www.linkedin.com/in/anishabirla/" target="_blank" rel="noopener noreferrer" className="icon-link">
    <img 
      src={ln}
      alt="LinkedIn" 
      className="icon"
    />
  </a>
  {/* <a href="https://github.com/Anisha2123" target="_blank" rel="noopener noreferrer" className="icon-link">
    <img 
      src={git}
      alt="GitHub" 
      className="icon"
    />
  </a> */}
  <a href="https://leetcode.com/u/Anishatycon/" target="_blank" rel="noopener noreferrer" className="icon-link">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
      alt="LeetCode" 
      className="icon"
    />
  </a>
  <a href="https://wa.me/6307255290" target="_blank" rel="noopener noreferrer" className="icon-link">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp" 
      className="icon"
    />
  </a>
</div>




     </div>
      <div className="right">
      <img src={i3}></img>
      </div>
     </section>
     <section className="projects">
      <h1>Projects</h1>
     <div className='mern'>
     <div className="sub">
      <h2>MERN Projects</h2>
      </div>
      <div className="pro">
      <div className="box">
  <h2>DashSphere</h2>
  <div className='icons'>
    <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a>
    <a href="https://svelete-project.vercel.app/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i1} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>CouponGPT</h2>
  <div className='icons'>
    <a href="https://github.com/Anisha2123/CouponGPT" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a>
    <a href="https://coupon-gpt.vercel.app/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i1} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>MoParcel</h2>
  <div className='icons'>
    <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a>
    <a href="https://moparcel.in/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i1} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>GrabOn</h2>
  <div className='icons'>
    <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a>
    <a href="https://www.grabon.in/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i1} alt="Project Screenshot"></img>
</div>

      </div>
     </div>
     <div className='wordpress'>
     <div className="sub">
      <h2>WordPress Projects</h2>
      </div>
      <div className="pro">
      <div className="box">
  <h2>Noguchi</h2>
  <div className='icons'>
    {/* <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a> */}
    <a href="https://www.noguchi.org/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i2} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>helloprismatic</h2>
  <div className='icons'>
    {/* <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a> */}
    <a href="https://helloprismatic.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i2} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>kemuri</h2>
  <div className='icons'>
    {/* <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a> */}
    <a href="https://www.kemuri-tatsuya.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i2} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>HelloHeco</h2>
  <div className='icons'>
    {/* <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a> */}
    <a href="https://www.helloheco.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i2} alt="Project Screenshot"></img>
</div>
<div className="box">
  <h2>Vogue</h2>
  <div className='icons'>
    {/* <a href="https://github.com/Anisha2123/SvelteProject" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className='i' />
    </a> */}
    <a href="https://www.vogue.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='i' />
    </a>
  </div>
  <img src={i2} alt="Project Screenshot"></img>
</div>


      </div>
     </div>
     </section>
     {/* <section className="exp">
      <h1>My Experience</h1>
     </section>
     <section className="profiles">
      <h1>My Profiles</h1>
     </section> */}
     <Footer />
    </div>
  );
}

export default App;
