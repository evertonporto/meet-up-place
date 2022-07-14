import { Link } from 'react-router-dom';

import classes from './MainNavigation.css'

function MainNavigation() {
    return (<header className={"header"}>
        <div className={"logo"}>React Meetup Places</div>
        <nav className={"nav"}>
            <ul>
                <li className={classes.li}>
                    <Link to="/"> All Meetups </Link>| {" "}
                    <Link to="/New"> Add New Meetups</Link>|{" "}
                    <Link to="/Favorite"> Favorite Meetups</Link>|{" "}
                </li>
            </ul>
        </nav>

    </header>)
}

export default MainNavigation;