import './Navbar.css';
function Navbar() {
    return (
        <nav>
            <ul className='navbar'>
                <li className='nav-item'><a href='#about'>About</a></li>
                <li className='nav-item'><a href='#portfolio'>Portfolio</a></li>
                <li className='nav-item'><a href='#interest'>Interest</a></li>
                <li className='nav-item'><a href='#project'>Project</a></li>
                <li className='nav-item'><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;