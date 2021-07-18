import { Image, Box, Heading, UnorderedList, ListItem, VStack, Center } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import React from 'react';
import photo from './../images/IMG2332.jpg'

function HomePage() {
        return (
            <VStack>
                <Box>
                   <Heading as="h1">
                            Tyler Williams - Software Developer
                    </Heading>
                    <Heading as="h3">Masters of Science in CyberSecurity - UMGC Class of 2016</Heading>
                    <Center>    
                        <Image
                        boxSize="300px"
                        borderRadius="full"
                        objectFit="cover"
                        src={photo}
                        alt="Tyler Williams - Software Developer"
                        />
                    </Center>
                </Box>
                <UnorderedList>
                    <ListItem><AddIcon/> Driven</ListItem>
                    <ListItem><AddIcon/> Dependable</ListItem>
                    <ListItem><AddIcon/> Determined</ListItem>
                </UnorderedList>
            </VStack>
        );
    }

export default HomePage;