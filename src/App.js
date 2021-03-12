import React from 'react';

import Navbar from './components/Navbar';
import MainView from './components/MainView/MainView';
import { Flex, Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Flex>
      <Box width={{lg: "30%"}}>
        <Navbar 
          bg={{base: "blue", lg:"red"}}
          pos="fixed"
          overflow="hidden"
          w={{base: "100%", lg: "20%"}}
          h={{lg: "340px"}}
          left={{lg: "20px"}}
          bottom={{base: "0"}}
          top={{lg: "30%"}}
        />
      </Box>
  
      <Box w={{lg: "70%"}}> 
        <MainView w={{base: "100%", lg: "70%"}}/>
      </Box>
    </Flex>
  );
}

export default App;