import React from 'react';
import { Link, HStack } from '@chakra-ui/react';

function Header() {
        return (
                <div className="nav">
                    <HStack spacing={6}>
                        <Link href="#Home">Home</Link>
                        <Link href="#About">About</Link>
                        <Link href="#Projects">Projects</Link>
                        <Link href="#Contact">Contact</Link>
                    </HStack>
                </div>
            );
    }

export default Header;
