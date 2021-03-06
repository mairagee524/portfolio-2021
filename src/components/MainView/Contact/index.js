import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';

function Contact(){
    return (
        <Flex>
            <Box>
                <h3>Ready to get started?</h3>
                <p>I'm excited to help! Let's turn your big ideas into reality and create something your clients will love.</p>
            </Box>
            <Box>
                <form action="https://formsubmit.co/mairagarcia.codes@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Full Name"required />
                    <input type="email" name="email" placeholder="Email Address" required />
                    <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required />
                    <Button type="submit">Send</Button>
                </form>
            </Box>
        </Flex>
    )
}

export default Contact;