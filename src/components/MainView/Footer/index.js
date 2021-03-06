import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

function Footer(props){
    return (
        <Box>
            <Flex>
                {props.mgInfo.socialLinks.map(icon =>
                    <a key={icon.key} href={icon.url} target="_blank" rel="noopener noreferrer">
                        <i className={icon.className} />
                    </a>
                )}
            </Flex>
            <p>Maira Garcia</p>
        </Box>
    )
}

export default Footer;