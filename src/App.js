
import AllMeetupsPage from './pages/AllMeetups';
import FavoriteMeetups from './pages/FavoriteMeetups';
import NewMeetups from './pages/NewMeetups';
import React from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/NewMeetups'>
          <NewMeetups />
        </Route>
        <Route path='/FavoriteMeetups'>
          <FavoriteMeetups />
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
