import React from 'react';

import Navbar from './components/Navbar';
import MainView from './components/MainView/MainView';
import { Flex, Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Flex>
      <Box width={{lg: "30%"}}>
        <Navbar 
          background={{base: "blue", lg:"red"}}
          pos="fixed"
          overflow="hidden"
          width={{base: "100%", lg: "20%"}}
          height={{lg: "225px"}}
          left={{lg: "20px"}}
          bottom={{base: "0"}}
          top={{lg: "50%"}}
        />
      </Box>
  
      <Box width={{lg: "70%"}}> 
        <MainView width={{base: "100%", lg: "70%"}}/>
      </Box>
    </Flex>
  );
}

export default App;