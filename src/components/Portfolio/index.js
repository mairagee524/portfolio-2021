import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

function Portfolio(props) {
    console.log(props);
    return (
        <Box>
            <h1>Portfolio</h1>
            <Flex>{props.mgInfo.portfolio.map(item =>
                <Box key={item.key}>
                    <h1>{item.portName}</h1>
                    <p>{item.portDesc}</p>
                </Box>   
            )}</Flex>     
        </Box>
    )
}

export default Portfolio;