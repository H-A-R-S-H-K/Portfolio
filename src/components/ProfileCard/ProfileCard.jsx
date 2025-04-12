import './ProfileCard.css';
import Typing from '../Typing/Typing';
import Image from '../../Assets/profile.jpeg';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProfileCard() {
    return (
        <div className='profile'>
            <div>
               <img src={Image} alt=''/> 
               <div>
                    <ul className='profile-socials'>
                        <li><FontAwesomeIcon icon={faFacebook} size='2x'/></li>
                        <li><FontAwesomeIcon icon={faTwitter} size='2x'/></li>
                        <li><FontAwesomeIcon icon={faLinkedin}size='2x'/></li>
                        <li><FontAwesomeIcon icon={faInstagram} size='2x' /></li>
                        <li><FontAwesomeIcon icon={faGithub} size='2x'/></li>
                    </ul>
               </div>
            </div>
            <div className='profile-items'>
                <h1 className='profile-heading'>Harsh Kumar</h1>
                <Typing 
                    text={['Developer', 'Otaku', 'Learner']}
                />

                <button className='green'>DOWNLOAD RESUME</button>
                <a href='#contact'><button className='blue'>CONTACT</button></a>

                <p>👨 ‍ 🎓 <span>Experience Level </span>:  2nd Year College Student</p>
                <p>💻 <span>I’m Currently Watching</span>  Jujutsu Kaisen 🚀</p>
                <p>🧩 <span>Interested In</span> :  Programming, Chess, Gym, Conspiracy Theories</p>
                <p>💡 <span>Equipments</span> : Python, Java, C++, Nodejs, Golang</p>
                <p>⚡ <span>Fun Fact</span> : Prefer protein over caffeine</p>
            </div>
        </div>
    )
}

export default ProfileCard;