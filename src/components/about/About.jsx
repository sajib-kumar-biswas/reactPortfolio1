import './about.css';
import ME from '../../images/sajib.jpg'

import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';



const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>1+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>I am solving problems on different coding platforms like codeforces, codechef, atcoder, geeksforgeeks, leetcode since second year of my university life. Now I am learning fullstack development using MERN stack technology. I usually read documentation and try to do some small project using things i learnt. I am really passionate to pursue my career in web development.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;