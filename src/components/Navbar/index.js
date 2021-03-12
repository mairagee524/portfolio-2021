import React from 'react';
// import MenuItem from './MenuItem';
import HomePic from '../../img/home.png';
import AboutPic from '../../img/user.png';
import PortPic from '../../img/briefcase.png';
import ContactPic from '../../img/contact.png';

import { Box, Stack, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';

function Navbar(props) {
    return (
        <Box {...props} >
            <Stack 
                direction={["row", "column"]} 
                justify="space-around"
                spacing={{lg: "20px"}}
                mt={{base: "10px", lg: "0"}}
            >
                <Box h={{lg: "70px"}} d="block" align="center" mt={{lg: "15px"}}>
                    <Image src={HomePic} boxSize="20px" alt="home"/>
                    <Link as={RouterLink} to="/">Home</Link>
                </Box>

                <Box h={{lg: "70px"}} d="block" align="center">
                    <Image src={AboutPic} boxSize="20px" alt="user"/>
                    <Link as={RouterLink} to="/about">About</Link>
                </Box>

                <Box h={{lg: "70px"}} d="block" align="center">
                    <Image src={PortPic} boxSize="20px" alt="briefcase"/>
                    <Link as={RouterLink} to="/portfolio">Portfolio</Link>
                </Box>

                <Box h={{lg: "70px"}} d="block" align="center">
                    <Image src={ContactPic} boxSize="20px" alt="phone"/>

                    <Link as={RouterLink} to="/contact">Contact</Link>
                </Box>
            </Stack>
        </Box>
    )
}    

export default Navbar;
