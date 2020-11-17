import React from 'react';
//components
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';
import TitleMsg from './components/title-msg/title-msg';
import About from './pages/about/about';
import './App.css';

const App = () => {
  return (<div>
    <MyNavbar />
    <MyCarousel />
    <TitleMsg />
    <About />
    </div>);
};

export default App;
