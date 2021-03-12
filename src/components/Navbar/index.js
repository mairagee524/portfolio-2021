import React from 'react';
// import MenuItem from './MenuItem';
import { Box, Stack, Link } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';

// import ProfilePic from '../../img/profile-pic.png';
// import LogoPic from '../../img/mg-logo.png'

function Navbar(props) {
    return (
        <Box {...props} >
            <Stack direction={["row", "column"]} >
                <Link as={RouterLink} to="/">Home</Link>
                <Link as={RouterLink} to="/about">About</Link>
                <Link as={RouterLink} to="/portfolio">Portfolio</Link>
                <Link as={RouterLink} to="/contact">Contact</Link>
            </Stack>
        </Box>
    )
}    

export default Navbar;
