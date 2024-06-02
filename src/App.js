import './App.css';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import Portfolio from './components/Portfolio';
import Interest from './components/Interest';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App" id='about'>
      <div className='app-header'>
        <h2>Harsh Kumar</h2>
        <Navbar />
      </div>
      <div className='profile-parent'>
        <ProfileCard />
      </div>
      <div className='portfolio-parent' id='portfolio'>
        <h2>What I Do</h2>
        <Portfolio/>
      </div>
      <div className='interest-parent' id='interest'>
        <h2>Interests</h2>
        <Interest />
      </div>
      <div className='project-parent' id='project'>
        <h2>Projects and Work</h2>
        <Project />
      </div>
      <div className='contact-parent' id='contact'>
        <h2>Contact</h2>
        <Contact />
      </div>
      <div className='app-footer'>
        <h4>Thank you For Visiting.</h4>
      </div>
    </div>
  );
}

export default App;
