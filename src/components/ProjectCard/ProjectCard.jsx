import './ProjectCard.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProjectCard({img, language, color, title, description}) {
    return (
        <div className='project-card'>
            <FontAwesomeIcon className='icon' icon={faGithub} size='3x' style={{position: 'relative', left: '270px', top: '182px', backgroundColor: 'white', borderRadius: '50%'}} />
            <img src={img} alt=''/>
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