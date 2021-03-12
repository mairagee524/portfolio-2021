import React from 'react';
// import MenuItem from './MenuItem';
import { Box, Stack, Link } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';

// import ProfilePic from '../../img/profile-pic.png';
// import LogoPic from '../../img/mg-logo.png'

function Navbar (props) {

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
        <Box {...props} >
            {/* <img src={ProfilePic} className="profile-pic" alt="girl inside a circle"/>

            <img src={LogoPic} className="logo-pic" alt="logo with initials 'MG'"/> */}
            {/* <h2>Maira <mark>Garcia</mark></h2>
            <p>Bilingual Full-Stack Developer</p> */}
            <Stack direction={["row", "column"]} >
                <Link as={RouterLink} to="/">Home</Link>
                <Link as={RouterLink} to="/about">About</Link>
                <Link as={RouterLink} to="/portfolio">Portfolio</Link>
                {/* <Link as={RouterLink} item="Testimonial" to="/testimonial"/></Link> */}
                <Link as={RouterLink} to="/contact">Contact</Link>
            </Stack>
        </Box>
    )
}    

export default Navbar;
