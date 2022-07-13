import AllMeetups from './pages/AllMeetups';
import FavoriteMeetups from './pages/FavoriteMeetups';
import NewMeetups from './pages/NewMeetups';
import React from 'react'
import MainNavigation from './components/layout/MainNavigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <MainNavigation path="/" />

      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/Favorite" element={<FavoriteMeetups />} />
        <Route path="/New" element={<NewMeetups />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
