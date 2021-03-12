import React from 'react';
// import MenuItem from './MenuItem';
import { Box, Stack, Link, Center } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';

// import ProfilePic from '../../img/profile-pic.png';
// import LogoPic from '../../img/mg-logo.png'

function Navbar(props) {
    return (
        <Box {...props} >
            <Stack direction={["row", "column"]} 
            justify="space-around">
                <Center h="50px">
                    <Link as={RouterLink} to="/">Home</Link>
                </Center>

                <Center h="50px">
                    <Link as={RouterLink} to="/about">About</Link>
                </Center>

                <Center h="50px">
                    <Link as={RouterLink} to="/portfolio">Portfolio</Link>
                </Center>

                <Center h="50px">
                    <Link as={RouterLink} to="/contact">Contact</Link>
                </Center>
            </Stack>
        </Box>
    )
}    

export default Navbar;
