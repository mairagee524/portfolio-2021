import React from 'react';
import PortItems from './PortfolioItems'
import { Box, Flex } from '@chakra-ui/react';

function Portfolio() {
    console.log(PortItems)
    return (
        <Box>
            <h1>Portfolio</h1>
            <Flex>{PortItems.portfolio.map(item =>
                <Box key={item.key}>
                    <h1>{item.portName}</h1>
                    <p>{item.portDesc}</p>
                </Box>   
            )}</Flex>     
        </Box>
    )
}

export default Portfolio;