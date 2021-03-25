import React from "react";
import MainScreen from "./screens/MainScreen/MainScreen";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  
  return (
    <MainScreen />
  );
}

export default App;