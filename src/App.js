import React from 'react';
// import About from './components/MainView/About';
// import NavBar from './components/Navbar';
// import Portfolio from './components/MainView/Portfolio';
// import Contact from './components/MainView/Contact';
// import Footer from './components/MainView/Footer';
// import Info from './PortfolioItems';

import Navbar from './components/Navbar';
import MainView from './components/MainView/MainView';
import { Box } from '@chakra-ui/react';

const App = () => {
  // const backgroundImage = 'images/mountain.jpg';
  const sidebarHeader = {
    fullName: 'Yo Yo Travel',
    shortName: 'YO'
  };
  const menuItems = [
    // {name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'About', to: '/about'},
    // {name: 'Destinations', to: '/destinations', icon: '/icons/destinations.svg', 
    //   subMenuItems: [
    //     { name: 'Canada', to: '/canada'},        
    //     { name: 'Brazil', to: '/brazil'},
    //     { name: 'India', to: '/india'},
    //     { name: 'Australia', to: '/australia'},
    //     { name: 'Kenya', to: '/kenya'},
    //     { name: 'Moldova', to: '/moldova'}
    //   ] },
    // {name: 'Blog', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    // {name: 'Services', to: '/services', icon: '/icons/services.svg', subMenuItems: [] },
    {name: 'Contacts', to: '/contacts'},
    {name: 'Portfolio', to: '/portfolio'}

  ];

  // const fonts = {
  //   header: 'ZCOOL KuaiLe',
  //   menu: 'Poppins'
  // }

  return (
    <Box>
      <Navbar background={{base: "blue", lg:"red"}}
        // backgroundImage={backgroundImage}
        // sidebarHeader={sidebarHeader}
        // menuItems={menuItems}
        // fonts={fonts}
        // colorPalette={Palette.brown}
      />
      <MainView />
    </Box>
  );
}

export default App;



// import { ChakraProvider } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import logo from './logo.svg';
// import {BrowserRouter as Router} from "react-router-dom";

// import './App.css';

// function App() {
//   return (
//     // <ChakraProvider>
//       <Router>
//         <NavBar />
//         <About />
//         <Portfolio mgInfo={Info} />
//         <Contact />
//         <Footer mgInfo={Info} />
//         {/* <Button>Hello</Button> */}
//       </Router>
//     // </ChakraProvider>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
