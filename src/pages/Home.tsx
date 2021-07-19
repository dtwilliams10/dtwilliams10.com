import { Image, Box, Heading, VStack, Center, Text} from '@chakra-ui/react';
import React from 'react';
import headshot from './../images/IMG2332.jpg'

function HomePage() {
        return (
            <div className="App-body">
            <VStack>
                <Box>
                    <Center>    
                        <Image
                        boxSize="300px"
                        borderRadius="full"
                        objectFit="cover"
                        src={headshot}
                        alt="Tyler Williams - Software Developer"
                        />
                    </Center>
                    <Heading as="h1">
                            Tyler Williams - Software Developer
                    </Heading>
                </Box>
            </VStack> 
            <Center>
                <Text>I am a software developer and systems administrator from Southern Maryland.</Text>
            </Center>
          </div>
        );
    }

export default HomePage;