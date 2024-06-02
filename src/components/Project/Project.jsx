import ProjectCard from '../ProjectCard';
import './Project.css';
import Project1 from '../../Assets/project1.png';
import Project2 from '../../Assets/project2.jpeg';
import Project3 from '../../Assets/project3.jpeg';
import Project4 from '../../Assets/project4.jpeg';
import Project5 from '../../Assets/project5.jpeg';
import Project6 from '../../Assets/project6.jpeg';
function Project() {
    return (
        <div className='project'>
            <ProjectCard 
                img={Project1}
                language={"Rust"}
                color={"#dea584"}
                title={"Vedic"}
                description={"vedic is the world's first working Sanskrit programming language"}
            />
            <ProjectCard 
                img={Project2}
                language={"JavaScript"}
                color={"#f1e05a"}
                title={"Bhagavad-Gita-Api"}
                description={"An opensource rest API on Vedic Scripture Shrimad Bhagavad Gita"}
            />
            <ProjectCard 
                img={Project3}
                language={"HTML"}
                color={"#e34c25"}
                title={"IPL-2020-Prediction"}
                description={"Predictive Analysis of an IPL Match using SVM Binary Classifier"}
            />
            <ProjectCard 
                img={Project4}
                language={"HTML"}
                color={"#e34c25"}
                title={"Linkpe"}
                description={"Linkpe is a Node.js based API🐳 to generate shareable UPI Payment links"}
            />
            <ProjectCard 
                img={Project5}
                language={"HTML"}
                color={"#e34c25"}
                title={"Movieinfo"}
                description={"Movie info app built with OMDb API that gets movie info from IMDb and Rotten Tomatoes."}
            />
            <ProjectCard 
                img={Project6}
                language={"Java"}
                color={"#b07219"}
                title={"Shreeganesh"}
                description={"This Astrology Android app provide solution of your life problem, based upon Krishna Jyotish Padathi."}
            />
        </div>
    )
}

export default Project;