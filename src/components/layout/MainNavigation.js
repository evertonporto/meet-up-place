import { useContext } from 'react'
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/content'
import classes from './MainNavigation.css'

function MainNavigation() {
    const FavoritesCtx = useContext(FavoritesContext)
    return (<header className={"header"}>
        <div className={"logo"}>React Meetup Places</div>
        <nav className={"nav"}>
            <ul>
                <li className={classes.li}>
                    <Link to="/"> All Meetups </Link>| {" "}
                    <Link to="/New"> Add New Meetups</Link>|{" "}
                    <Link to="/Favorite"> Favorite Meetups
                        <span className={'badge'}>{FavoritesCtx.totalFavorites}</span>
                    </Link>|{" "}
                </li>
            </ul>
        </nav>

    </header>)
}

export default MainNavigation;