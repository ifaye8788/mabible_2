'use client'
import React from 'react';

interface HeaderProps {
  title: string;
  onSearchChange: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSearchChange }) => {
  return (
    <header>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
};

export default Header;
