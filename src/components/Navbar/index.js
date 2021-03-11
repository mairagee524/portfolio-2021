import React from 'react';
// import MenuItem from './MenuItem';
import { Box, Stack, Link } from '@chakra-ui/react';

// import ProfilePic from '../../img/profile-pic.png';
// import LogoPic from '../../img/mg-logo.png'

function Navbar () {

    // const [menuItemActive, setMenuItemActive] = useState('');
    
    // const itemActive = (x) => {
    //     if (menuItemActive.length > 0){
    //         document.getElementById(menuItemActive).classList.remove('active');
    //     }
    //     setMenuItemActive({'MenuItemActive':x}, () => {
    //         document.getElementById(menuItemActive).classList.add('active');
    //     });
    // }

    return (
        <Box className="nav-box">
            {/* <img src={ProfilePic} className="profile-pic" alt="girl inside a circle"/>
            <img src={LogoPic} className="logo-pic" alt="logo with initials 'MG'"/> */}
            {/* <h2>Maira <mark>Garcia</mark></h2>
            <p>Bilingual Full-Stack Developer</p> */}
            <Stack direction={["row", "column"]} >
                <Link item="Home" tolink="/"/>
                <Link item="About" tolink="/about"/>
                <Link item="Portfolio" tolink="/portfolio"/>
                {/* <Link item="Testimonial" tolink="/testimonial"/> */}
                <Link item="Contact" tolink="/contact"/>
            </Stack>
        </Box>
    )
}    

export default Navbar;
