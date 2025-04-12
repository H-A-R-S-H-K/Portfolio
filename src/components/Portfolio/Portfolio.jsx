import './Portfolio.css';
import PortfolioCard from '../../components/PortfolioCard';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faA} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Portfolio() {
    return (
        <div className='portfolio'>
          <PortfolioCard 
          img={<FontAwesomeIcon icon={faUser} size='2x' color='Dodgerblue'/>}
          title={"Developer"} 
          description={"Passionate Computer Science student with strong foundations in Java, Python, C++, Golang and JavaScript. Highly proficient in Machine Learning and have a strong understanding of SQL and data management principles. Able to work effectively in both individual and team environments and am committed to delivering high-quality results."} 
          /> 
          <PortfolioCard 
          img={<FontAwesomeIcon icon={faA} size='2x' color='Mediumslateblue'/>}
          title={"Otaku"} 
          description={"I am an Otaku, which is a term used to describe someone who is deeply passionate about anime and manga. As an Otaku, I have a deep appreciation for the art, storytelling, and cultural significance of these mediums. I enjoy immersing myself in the rich and diverse world of anime and manga, and I am always eager to learn more about new series and creators. My love for Otaku culture goes beyond just consuming media, as I also enjoy participating in fan communities and events, and sharing my enthusiasm with others. Being an Otaku is a big part of my identity, and I am proud to be a part of this vibrant and creative community.."} 
          /> 
          <PortfolioCard 
          img={<FontAwesomeIcon icon={faBook} size='2x' color='Tomato'/>}
          title={"Learner"} 
          description={"I am constantly learning and growing in my field. I am passionate about creating innovative solutions and using technology to solve real-world problems. I have a strong foundation in programming languages such as Java and Python, and am always eager to expand my skillset and take on new challenges. Whether I am working on a solo project or collaborating with a team, I thrive in a fast-paced and dynamic environment. I am excited to continue my career as a developer and make a positive impact in the tech industry."} 
          /> 
        </div>
    )
}
export default Portfolio;