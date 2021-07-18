import React from 'react';
import { Link, HStack } from '@chakra-ui/react';

function Header() {
        return (
                <div className="nav">
                    <HStack spacing={6}>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </HStack>
                </div>
            );
    }

export default Header;
