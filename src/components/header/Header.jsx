import './header.css';
import './CTA';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import ME from '../../images/sajib-removebg.png';

const Header = () => {
    
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>SAJIB KUMAR BISWAS</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;