import React from 'react';
//components
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';
import TitleMsg from './components/title-msg/title-msg';
import './App.css';

const App = () => {
  return (<div>
    <MyNavbar />
    <MyCarousel />
    <TitleMsg />
    </div>);
};

export default App;
