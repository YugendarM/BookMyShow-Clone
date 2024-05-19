import './App.css';
import React from 'react';
//HOC
import   DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
//Pages 
import HomePage from './Pages/HomePage.pages';
import MoviePage from './Pages/MoviePage.pages';
import PlaysPage from './Pages/PlaysPage.pages';
import Temp from './components/Temp';
//axios
import axios from 'axios';

//Components

//Slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;


function App() {
  return (
    
    <>
    {/* <h1>hello app</h1> */}
    
    <DefaultHOC path= '/' exact component= {HomePage}/>
    <MovieHOC path='/movie/:id' exact component={MoviePage}/>
    <DefaultHOC path= '/plays'  component= {PlaysPage}/>
    </>
  );
}

export default App;
