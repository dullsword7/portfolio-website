import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import HomePage from '../HomePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.css';

function NavBar() {

  return (
    <div className="nav-bar">
        <Router>
            <nav>
                <div>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/'><h2>Home</h2></Link>
                        </li>
                        <li>
                            <Link to='About'><h2>About</h2></Link>
                        </li>
                        <li>
                            <Link to='Projects'><h2>Projects</h2></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='external-links'>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alan-wu7/'>
                                <FontAwesomeIcon icon={faLinkedin} color="white" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://github.com/dullsword7'>
                                <FontAwesomeIcon icon={faGithub} color="white" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Projects' element={<Projects />} />
            </Routes>
        </Router>
    </div>
  );
}

export default NavBar;
