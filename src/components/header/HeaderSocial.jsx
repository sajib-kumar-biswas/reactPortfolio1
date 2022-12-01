import {BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs';


const HeaderSocial = () => {

    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/sajib-biswas-726990228/"><BsLinkedin /></a>
            <a href="https://github.com/sajib-kumar-biswas?tab=repositories"><BsGithub/></a>
            <a href="https://www.facebook.com/sajibkumar.biswas.583"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial;