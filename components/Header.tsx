'use client'
import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react'

interface HeaderProps {
  title: string;
  onSearchChange: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSearchChange }) => {

  return (
    <header>
      <Flex>
        <Box p='4' bg='white.400'>
          <h1>{title}</h1>
        </Box>
        <Spacer />
        <Box p='4' bg='white.400'>
          <input
            type="text"
            placeholder="Rechercher"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </Box>
      </Flex>
    </header>
  );
};

export default Header;

