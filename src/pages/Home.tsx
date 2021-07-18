import { Image, Box, Heading, VStack, Center } from '@chakra-ui/react';
import React from 'react';
import photo from './../images/IMG2332.jpg'

function HomePage() {
        return (
            <>
            <VStack>
                <Box>
                <Center>    
                        <Image
                        boxSize="300px"
                        borderRadius="full"
                        objectFit="cover"
                        src={photo}
                        alt="Tyler Williams - Software Developer"
                        />
                    </Center>
                   <Heading as="h1">
                            Tyler Williams - Software Developer
                    </Heading>
                </Box>
            </VStack> 
          </>
        );
    }

export default HomePage;