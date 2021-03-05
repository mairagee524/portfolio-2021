import React, {useState} from 'react';
import MenuItem from './MenuItem';
import ProfilePic from '../../img/profile-pic.png';
import LogoPic from '../../img/mg-logo.png'


function Navbar () {

    const [menuItemActive, setMenuItemActive] = useState( 'MenuItemActive');
    
    // }
    // class Navbar extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state={
    //             'MenuItemActive':''
    //         }
    //     }


    const menuItemActive = (x) => {
        if(menuItemActive.length > 0){
            document.getElementById(menuItemActive).classList.remove('active');
        }
        setMenuItemActive({'MenuItemActive':x}, () => {
            document.getElementById(menuItemActive).classList.add('active');
        });
    }

    // activeitem= (x) => {
    //     if(this.state.MenuItemActive.length > 0){
    //         document.getElementById(this.state.MenuItemActive).classList.remove('active');
    //     }
    //     this.setState({'MenuItemActive':x}, () => {
    //         document.getElementById(this.state.MenuItemActive).classList.add('active');
    //     });
    // };

    return (
        <nav className="glass">
            <img src={ProfilePic} className="profile-pic" alt="girl inside a circle"/>

            <img src={LogoPic} className="logo-pic" alt="logo with initials 'MG'"/>
            {/* <h2>Maira <mark>Garcia</mark></h2>
            <p>Bilingual Full-Stack Developer</p> */}
            <ul>
                <MenuItem item="Home" tolink="/" activec={menuItemActive}/>
                <MenuItem item="About" tolink="/about" activec={menuItemActive}/>
                <MenuItem item="Portfolio" tolink="/portfolio" activec={menuItemActive}/>
                {/* <MenuItem item="Testimonial" tolink="/testimonial" activec={menuItemActive}/> */}
                <MenuItem item="Contact" tolink="/contact" activec={menuItemActive}/>
            </ul>
        </nav>
    )
    
}    

export default Navbar;
