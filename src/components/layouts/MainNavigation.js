import {Link} from 'react-router-dom';

function MainNavigation(props){
    return (
        <header>
        <nav className="main-navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
            </nav>
            </header>
            )
}

export default MainNavigation;