import ProjectCard from '../ProjectCard';
import './Project.css';
import Project1 from '../../Assets/project1.png';
import Project2 from '../../Assets/project2.jpeg';
import Project3 from '../../Assets/project3.jpeg';
function Project() {
    return (
        <div className='project'>
            <ProjectCard 
                img={Project1}
                language={"Javascript"}
                color={"#dea584"}
                title={"Simon Game"}
                description={"short term memory game"}
                link={"https://github.com/H-A-R-S-H-K/WebDevProject"}
            />
            <ProjectCard 
                img={Project2}
                language={"Java"}
                color={"#f1e05a"}
                title={"Event Management"}
                description={"OOP group project on event management"}
                link={"https://github.com/H-A-R-S-H-K/EventManagement"}
            />
            <ProjectCard 
                img={Project3}
                language={"Java"}
                color={"#e34c25"}
                title={"Tic Tac Toe"}
                description={"Famous game tic-tac-toe built on basic principles of OOPs"}
                link={"https://github.com/H-A-R-S-H-K/TicTacToe"}
            />
        </div>
    )
}

export default Project;