import './Interest.css';
import InterestCard from '../../components/InterestCard';
import { faTv, faMusic, faChessKing, faDumbbell, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Interest() {
    return (
        <div className='interest'>
            <InterestCard 
              img={<FontAwesomeIcon icon={faTv} size='2x' color='Dodgerblue'/>}
              title={"Movie"}
            />
            <InterestCard 
              img={<FontAwesomeIcon icon={faMusic} size='2x' color='Dodgerblue'/>}
              title={"Music"}
            />
            <InterestCard 
              img={<FontAwesomeIcon icon={faChessKing} size='2x' color='Dodgerblue'/>}
              title={"Chess"}
            />
            <InterestCard 
              img={<FontAwesomeIcon icon={faDumbbell} size='2x' color='Dodgerblue'/>}
              title={"Gym"}
            />
            <InterestCard 
              img={<FontAwesomeIcon icon={faMobile} size='2x' color='Dodgerblue'/>}
              title={"Gaming"}
            />
        </div>
    )
}

export default Interest;