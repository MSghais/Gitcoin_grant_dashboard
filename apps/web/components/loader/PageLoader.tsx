import React from 'react';
import { Box, CircularProgress, Icon, Flex } from '@chakra-ui/react';
import { FaPodcast, FaStream, FaUserFriends } from 'react-icons/fa';
import { CiStreamOn } from 'react-icons/ci';
import CircularLoader from '../CircularLoader';
const PageLoader: React.FC = () => {
    return (

        <Box
        display={"grid"}
        alignItems="center" 
        justifyItems="center"
        justifyContent={"center"}
        >
      
      <CircularLoader></CircularLoader>
            <Flex 
            align="center" justify="center"
                //  minHeight="100vh"
                height={"100%"}
                width={"100%"}
                alignItems={"baseline"}
                alignContent={"baseline"}
                gap={{base:"0.5em",md:"1em"}}

            >
                  
            </Flex>
        </Box>

    );
};

export default PageLoader;
