import React from 'react';
import { Box, CircularProgress, Icon, Flex } from '@chakra-ui/react';
import { FaPodcast, FaStream, FaUserFriends } from 'react-icons/fa';
import { CiStreamOn } from 'react-icons/ci';

const SocialLoader: React.FC = () => {
    return (

        <Box
            display={"grid"}
            alignItems="center"
            justifyItems="center"
            justifyContent={"center"}
        // className='loading_state'
        >

            <Box>
                <CircularProgress>

                </CircularProgress>
           
            </Box>

        </Box>

    );
};

export default SocialLoader;
