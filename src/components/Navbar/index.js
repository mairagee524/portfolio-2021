import React, {useState} from 'react';
import MenuItem from './MenuItem';
import { Box, Stack } from '@chakra-ui/react';

// import ProfilePic from '../../img/profile-pic.png';
// import LogoPic from '../../img/mg-logo.png'

function Navbar () {

    const [menuItemActive, setMenuItemActive] = useState('');
    
    const itemActive = (x) => {
        if (menuItemActive.length > 0){
            document.getElementById(menuItemActive).classList.remove('active');
        }
        setMenuItemActive({'MenuItemActive':x}, () => {
            document.getElementById(menuItemActive).classList.add('active');
        });
    }

    return (
        <Box className="nav-box">
            {/* <img src={ProfilePic} className="profile-pic" alt="girl inside a circle"/>

            <img src={LogoPic} className="logo-pic" alt="logo with initials 'MG'"/> */}
            {/* <h2>Maira <mark>Garcia</mark></h2>
            <p>Bilingual Full-Stack Developer</p> */}
            <Stack direction={["row", "column"]} >
                <MenuItem item="Home" tolink="/" activec={itemActive}/>
                <MenuItem item="About" tolink="/about" activec={itemActive}/>
                <MenuItem item="Portfolio" tolink="/portfolio" activec={itemActive}/>
                {/* <MenuItem item="Testimonial" tolink="/testimonial" activec={itemActive}/> */}
                <MenuItem item="Contact" tolink="/contact" activec={itemActive}/>
            </Stack>
        </Box>
    )
    
}    

export default Navbar;
