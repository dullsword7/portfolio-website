import './index.css';
import { Link } from 'react-router-dom';
import Self from '../../assets/images/self.jpg';

function HomePage () {

    return (
        <div className='container home-page'>
            <h1>
                Hi my name is Alan Wu! Thanks for checking out my portfolio.
            </h1>

            <p>
                Check my <Link className='home-links' to='About'>About</Link> section to learn more about me or my <Link className='home-links' to='Projects'>Project</Link> section to see what projects I've worked on.
            </p>
            <body>
                <img src={Self} alt="Me" />
            </body>
        </div>
    );
}

export default HomePage
