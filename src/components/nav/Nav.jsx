import './nav.css';

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav==='#home' ? "active": ""}><AiOutlineHome/></a>
            <a onClick={(e) => setActiveNav("#about")} className={activeNav==="#about" ? "active": ""} href="#about"><AiOutlineUser /></a>
            <a onClick={e => setActiveNav("#experience")} className={activeNav==="#experience" ? "active": ""} href="#experience"><BiBookAlt /></a>
            <a onClick={e => setActiveNav("#services")} className={activeNav==="#services" ? "active": ""} href="#services"><RiServiceLine /></a>
            <a onClick={e => setActiveNav("#contact")} className={activeNav==="#contact" ? "active": ""} href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav;