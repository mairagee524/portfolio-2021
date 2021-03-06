

// // import React from "react";
// // import { Link, Box, Flex, Text, Button, VStack } from "@chakra-ui/react";

// // // import Logo from "../../img/mg-logo.png";

// // const NavBar = (props) => {
// //   const [isOpen, setIsOpen] = React.useState(false);

// //   const toggle = () => setIsOpen(!isOpen);

// //   return (
// //     <NavBarContainer {...props}>
// //       {/* <Logo
// //         w="100px"
// //         color={["white", "white", "primary.500", "primary.500"]}
// //       /> */}
// //       <MenuToggle toggle={toggle} isOpen={isOpen} />
// //       <MenuLinks isOpen={isOpen} />
// //     </NavBarContainer>
// //   );
// // };

// // const CloseIcon = () => (
// //   <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
// //     <title>Close</title>
// //     <path
// //       fill="white"
// //       d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
// //     />
// //   </svg>
// // );

// // const MenuIcon = () => (
// //   <svg
// //     width="24px"
// //     viewBox="0 0 20 20"
// //     xmlns="http://www.w3.org/2000/svg"
// //     fill="white"
// //   >
// //     <title>Menu</title>
// //     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
// //   </svg>
// // );

// // const MenuToggle = ({ toggle, isOpen }) => {
// //   return (
// //     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
// //       {isOpen ? <CloseIcon /> : <MenuIcon />}
// //     </Box>
// //   );
// // };

// // const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
// //   return (
// //     <Link href={to}>
// //       <Text display="block" {...rest}>
// //         {children}
// //       </Text>
// //     </Link>
// //   );
// // };

// // const MenuLinks = ({ isOpen }) => {
// //   return (
// //     <Box
// //       display={{ base: isOpen ? "block" : "none", md: "block" }}
// //       flexBasis={{ base: "100%", md: "auto" }}
// //     >
// //       <VStack
// //         spacing={8}
// //         align="center"
// //         justify={["center", "space-between", "flex-end", "flex-end"]}
// //         direction={["column", "row", "row", "row"]}
// //         pt={[4, 4, 0, 0]}
// //       >
// //         <MenuItem to="/">Home</MenuItem>
// //         <MenuItem to="/how">How It works </MenuItem>
// //         <MenuItem to="/faetures">Features </MenuItem>
// //         <MenuItem to="/pricing">Pricing </MenuItem>
// //         <MenuItem to="/signup" isLast>
// //           <Button
// //             size="sm"
// //             rounded="md"
// //             color={["primary.500", "primary.500", "white", "white"]}
// //             bg={["white", "white", "primary.500", "primary.500"]}
// //             _hover={{
// //               bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
// //             }}
// //           >
// //             Create Account
// //           </Button>
// //         </MenuItem>
// //       </VStack>
// //     </Box>
// //   );
// // };

// // const NavBarContainer = ({ children, ...props }) => {
// //   return (
// //     <Flex
// //       as="nav"
// //       align="center"
// //       justify="space-between"
// //       wrap="wrap"
// //       w="100%"
// //       mb={8}
// //       p={8}
// //       bg={["primary.500", "primary.500", "transparent", "transparent"]}
// //       color={["white", "white", "primary.700", "primary.700"]}
// //       {...props}
// //     >
// //       {children}
// //     </Flex>
// //   );
// // };

// // export default NavBar;




// import React, {useState} from 'react';
// import MenuItem from './MenuItem';
// import { Box, VStack, Flex } from '@chakra-ui/react';






// // import ProfilePic from '../../img/profile-pic.png';
// // import LogoPic from '../../img/mg-logo.png'


// function Navbar () {

//     const [menuItemActive, setMenuItemActive] = useState('');
    
//     // }
//     // class Navbar extends Component {
//     //     constructor(props) {
//     //         super(props);
//     //         this.state={
//     //             'MenuItemActive':''
//     //         }
//     //     }


//     const itemActive = (x) => {
//         if (menuItemActive.length > 0){
//             document.getElementById(menuItemActive).classList.remove('active');
//         }
//         setMenuItemActive({'MenuItemActive':x}, () => {
//             document.getElementById(menuItemActive).classList.add('active');
//         });
//     }

//     // activeitem= (x) => {
//     //     if(this.state.MenuItemActive.length > 0){
//     //         document.getElementById(this.state.MenuItemActive).classList.remove('active');
//     //     }
//     //     this.setState({'MenuItemActive':x}, () => {
//     //         document.getElementById(this.state.MenuItemActive).classList.add('active');
//     //     });
//     // };

//     return (
//         <nav className="glass">
//             {/* <img src={ProfilePic} className="profile-pic" alt="girl inside a circle"/>

//             <img src={LogoPic} className="logo-pic" alt="logo with initials 'MG'"/> */}
//             {/* <h2>Maira <mark>Garcia</mark></h2>
//             <p>Bilingual Full-Stack Developer</p> */}
//             <ul>
//                 <MenuItem item="Home" tolink="/" activec={itemActive}/>
//                 <MenuItem item="About" tolink="/about" activec={itemActive}/>
//                 <MenuItem item="Portfolio" tolink="/portfolio" activec={itemActive}/>
//                 {/* <MenuItem item="Testimonial" tolink="/testimonial" activec={itemActive}/> */}
//                 <MenuItem item="Contact" tolink="/contact" activec={itemActive}/>
//             </ul>
//         </nav>
//     )
    
// }    

// export default Navbar;
