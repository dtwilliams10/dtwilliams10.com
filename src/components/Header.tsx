import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, HStack } from '@chakra-ui/react';

function Header() {
        return (
                <div className="nav">
                    <HStack spacing={6}>
                        <Link as={RouterLink} to="/">Home</Link>
                        <Link as={RouterLink} to="/about">About</Link>
                        <Link as={RouterLink} to="/projects">Projects</Link>
                        <Link as={RouterLink} to="/contact">Contact</Link>
                    </HStack>
                </div>
            );
    }

export default Header;
