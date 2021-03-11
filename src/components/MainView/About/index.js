import React from 'react';
import { Box } from '@chakra-ui/react';
import ProfilePic from '../../../img/profile-pic.png';

function About() {
    return (
        <Box>
            <img src={ProfilePic} alt="girl in a circle"/>
            <h1>About Me</h1>
            <p>As a double Bruin alumna (UCLA'17 & UNEX'20), I find ways to add to my knowledge while benefitting communities. That is why I volunteer as a Lead Front-End developer for a start-up called Prentus. There, my team and I are developing a website that matches recent bootcamp grads (like myself!) to mentors so that they are able to work on a project. My long-term goal is to create a form of technology that would assist underserved communities.</p>

            <p>In short, I am always up for a challenge when developing new applications. I enjoy learning something new everyday! It is interesting to see how many things you can create with just a couple lines of code! When I am not coding, I am either bullet journaling, going on nature walks, working out, or living my life at a concert.</p>
        </Box>
    )
}

export default About;