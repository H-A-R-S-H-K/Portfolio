import './Contact.css';
import Facebook from '../../Assets/facebook.png';
import Twitter from '../../Assets/twitter.png';
import LinkedIn from '../../Assets/linkedin.png';
import Youtube from '../../Assets/youtube.png';
import Reddit from '../../Assets/reddit.png';
function Contact() {
    return (
        <div className='contact'>
            <p>Find me on</p>
            <ul>
                <img src={Facebook} alt=''/>
                <img src={Twitter} alt=''/>
                <img src={LinkedIn} alt=''/>
                <img src={Youtube} alt=''/>
                <img src={Reddit} alt=''/>
            </ul>
        </div>
    )
}

export default Contact;