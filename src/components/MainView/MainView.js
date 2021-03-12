import React from 'react';
import Routes from '../../Routes';
import { Box } from '@chakra-ui/react';

function MainView(props) {
  return (
    <Box {...props}>
      <Routes />
    </Box>
  )
}

export default MainView;