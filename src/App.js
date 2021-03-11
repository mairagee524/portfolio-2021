import React from 'react';
import About from './components/MainView/About';
import NavBar from './components/Navbar';
import Portfolio from './components/MainView/Portfolio';
import Contact from './components/MainView/Contact';
import Footer from './components/MainView/Footer';
import Info from './PortfolioItems';

// import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import logo from './logo.svg';
import {BrowserRouter as Router} from "react-router-dom";

import './App.css';

function App() {
  return (
    // <ChakraProvider>
      <Router>
        <NavBar />
        <About />
        <Portfolio mgInfo={Info} />
        <Contact />
        <Footer mgInfo={Info} />
        {/* <Button>Hello</Button> */}
      </Router>
    // </ChakraProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
