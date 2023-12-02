import React from 'react';
import { Box, CircularProgress, Icon, Flex } from '@chakra-ui/react';
import { FaPodcast, FaStream, FaUserFriends } from 'react-icons/fa';
import { CiStreamOn } from 'react-icons/ci';

const LoaderOverlay: React.FC = () => {
    return (

        <Box
        display={"grid"}
        alignItems="center" 
        justifyItems="center"
        justifyContent={"center"}
        >
            <CircularProgress
                isIndeterminate
                //   color="teal.400"
                trackColor="gray.200"
            //   size={{base:"60px", md:"90px", lg:'120px'}}
            />
            <Flex 
            align="center" justify="center"
                //  minHeight="100vh"
                height={"100%"}
                width={"100%"}
                alignItems={"baseline"}
                alignContent={"baseline"}
                gap={{base:"0.5em",md:"1em"}}

            >
                    <Icon as={FaUserFriends}
                        // boxSize={16}
                        boxSize={{ base: "8", md: "10" }}

                        mb={4}
                    />
                    <Icon as={CiStreamOn}
                        boxSize={{ base: "8", md: "10" }}
                    //  mb={4} 
                    />
                    <Icon as={FaPodcast}
                        //  boxSize={8} 
                        boxSize={{ base: "8", md: "10" }}

                    // mb={4}
                    />
               
                {/* <Waves></Waves> */}
                {/* <SampleWaves></SampleWaves> */}
            </Flex>
        </Box>

    );
};

export default LoaderOverlay;
