import { Image, Heading, VStack, Center, Text} from '@chakra-ui/react';
import React from 'react';
import headshot from './../images/IMG2332.jpg'

function HomePage() {
        return (
            <div className="App-body">
            <VStack>
                    <Center>    
                        <Image
                        boxSize="300px"
                        borderRadius="full"
                        objectFit="cover"
                        src={headshot}
                        alt="Tyler Williams - Software Developer"
                        />
                    </Center>
                    <br/>
                    <Heading as="h1">
                        Tyler Williams
                    </Heading>
                    <br/>
                    <Text>
                        Full Stack Developer
                    </Text>
            </VStack> 
            <br/>
            <Center>
                <Text>SOFTWARE DEVELOPMENT - SYTEMS ADMINISTRATION - SATISFIED CUSTOMERS</Text>
            </Center>
          </div>
        );
    }

export default HomePage;
