import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, HStack } from '@chakra-ui/react';

function Header() {
        return (
                <div className="nav">
                    <HStack spacing={8}>
                        <br/>
                        <Link _hover={{ 'text-decoration': 'none' }} as={RouterLink} to="/">Home</Link>
                        <Link _hover={{ 'text-decoration': 'none' }} as={RouterLink} to="/about">About</Link>
                        <Link _hover={{ 'text-decoration': 'none' }} as={RouterLink} to="/projects">Projects</Link>
                        <Link _hover={{ 'text-decoration': 'none' }} as={RouterLink} to="/contact">Contact</Link>
                    </HStack>
                </div>
            );
    }

export default Header;
