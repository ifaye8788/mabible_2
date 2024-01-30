import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotesListTest = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const formattedNotes = response.data.map((note) => ({
          id: note.id,
          title: note.title,
          content: note.body,
          createdAt: new Date().toISOString(),
        }));
        setNotes(formattedNotes);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []); // Le tableau vide signifie que useEffect s'exécutera une seule fois après le montage du composant

  return (
    <div>
      <h1>Notes List</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            <p>{note.content}</p>
            <p>Created At: {note.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesListTest;
