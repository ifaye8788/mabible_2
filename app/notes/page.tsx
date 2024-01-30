'use client'
import React, { useState } from 'react';
import NoteList from '../../components/NoteList';
import Header from '../../components/Header';
import { Grid, GridItem } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";
import { useNoteContext } from '../../contexts/NoteContext';



const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { notes, deleteNote, updateNote } = useNoteContext();

  console.log('NotesPage : notes = ', notes);

  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateNote = (updatedNote: Note) => {
    updateNote(updatedNote);
  };

  const handleDeleteNote = (id: number) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteNote(id);
    }
  };

  return (
    <>
      <div>
        <Grid
          templateAreas={`"header header"
          "nav main"
          "nav footer"`}
          gridTemplateRows={'50px 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='200px'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='pink.300' area={'nav'}>
            <Navigation />
          </GridItem>
          <GridItem pl='2' bg='green.300' area={'main'}>
            <Header title="Notes" onSearchChange={setSearchTerm} />
          </GridItem>
          <GridItem pl='2' bg='blue.300' area={'footer'}>
            <NoteList notes={filteredNotes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default NotesPage;
