import { Image, Box, Heading, UnorderedList, ListItem, Center } from '@chakra-ui/react';
import React from 'react';
import photo from './../images/IMG2332.jpg'

function HomePage() {
        return (
          <Center>
              <Box>
                <Heading as="h1">
                  Welcome to the home page of Tyler Williams - Software
                  Developer
                </Heading>
                <Heading as="h3">Masters of Science in CyberSecurity - UMGC Class of 2016</Heading>
                <Image
                  boxSize="600px"
                  borderRadius="full"
                  objectFit="cover"
                  src={photo}
                  alt="Tyler Williams - Software Developer"
                />
              </Box>
              <UnorderedList>
                <ListItem>Driven</ListItem>
                <ListItem>Dependable</ListItem>
                <ListItem>Determined</ListItem>
              </UnorderedList>
          </Center>
        );
    }

export default HomePage;