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

                <p>👨 ‍ 🎓 <span>Experience Level </span>:  0+ years</p>
                <p>💻 <span>I’m Currently Watching</span>  Jujutsu Kaisen 🚀</p>
                <p>🧩 <span>Interested In</span> :  Technology, Chess, Space, Gym</p>
                <p>💡 <span>Equipments</span> : Knowledge, java, C++, nodejs, webdev, Linux</p>
                <p>⚡ <span>Fun Fact</span> : Prefer protein over coffee</p>
            </div>
        </div>
    )
}

export default ProfileCard;