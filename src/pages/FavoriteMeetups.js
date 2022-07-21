import { useContext } from 'react';

import FavoritesContext from '../store/content'

import MeetupList from '../components/meetups/MeetupList'

function FavoriteMeetups() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites = 0) {
        content = <p> You got no favorites yet. Start Adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.totalFavorites} />
    }

    return (<div>
        <h1>My Favorite </h1>
        <MeetupList meetups={favoritesCtx.favorites} />
    </div>
    )
}

export default FavoriteMeetups;