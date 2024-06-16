import './ProjectCard.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProjectCard({img, language, color, title, description, link}) {
    return (
        <div className='project-card'>
            <img src={img} alt=''/>
            <a href={link}>
            <FontAwesomeIcon className='icon' icon={faGithub} size='3x' 
                            style={{position: 'relative', 
                                    bottom: '40px',
                                    left: '270px',  
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '50%' }}
                                    />
            </a>
            <ul style={{color: `${color}`}}>
                <li>{language}</li>
            </ul>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;