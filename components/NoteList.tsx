/*'use client'
import React, { useState } from 'react';
import { Stack, HStack, VStack, StackDivider, Box, Button, ButtonGroup, IconButton, Center } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

interface NoteListProps {
  notes: Note[];
  onUpdateNote: (note: Note) => void;
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onUpdateNote, onDeleteNote }) => {
  const router = useRouter();

  console.log('NoteList : notes = ', notes);
  console.log('NoteList : notes.length = ', notes.length);

  return (
    <> 
      {notes.length === 0 ? (
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
          >
            <Box boxSize='sm'>
              <Center >
                <Image src='./bookImage.png' alt="book-image" />
              </Center>
            </Box>
            <Box h='40px' bg='white.200'>
              <Center >
                Aucune note rédigée pour le moment
              </Center>
            </Box>
            <Box h='40px' bg='white.200'>
              <ButtonGroup size='sm' isAttached variant='outline'>
                <IconButton aria-label='Add Note' onClick={() => router.push('/noteform')} icon={<AddIcon />} />
              </ButtonGroup>
            </Box>
          </VStack >
      ) : (
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
          >
            <Box h='40px' bg='white.200'>
              <ButtonGroup size='sm' isAttached variant='outline'>
                <IconButton aria-label='Add Note' onClick={() => router.push('/noteform')} icon={<AddIcon />} />
              </ButtonGroup>
            </Box>
            <Box h='40px' bg='white.200'>
              <div>
                <h2>Notes List</h2>
                <ul>
                  {notes.map((note) => (
                    <li key={note.id}>
                      <p>Title: {note.title}</p>
                      <p>Content: {note.body}</p>
                      <p>Created at: {note.createdAt.toString()}</p>
                      <button onClick={() => onUpdateNote(note)}>Update</button>
                      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
            </Box>
          </VStack>
      )}
    </>

  )


};

export default NoteList;*/

'use client'
import React, { useState } from 'react';
import { Stack, HStack, VStack, StackDivider, Box, Button, ButtonGroup, IconButton, Center } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Flex, Spacer, AbsoluteCenter } from '@chakra-ui/react'

interface NoteListProps {
  notes: Note[];
  onUpdateNote: (note: Note) => void;
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onUpdateNote, onDeleteNote }) => {
  const router = useRouter();

  console.log('NoteList : notes = ', notes);
  console.log('NoteList : notes.length = ', notes.length);

  return (
    <>
      {notes.length === 0 ? (
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Box boxSize='sm'>
            <Center >
              <Image src='./bookImage.png' alt="book-image" />
            </Center>
          </Box>
          <Box h='40px' bg='white.200'>
            <Center >
              Aucune note rédigée pour le moment
            </Center>
          </Box>
          <Box h='40px' bg='white.200'>
            <ButtonGroup size='sm' isAttached variant='outline'>
              <IconButton aria-label='Add Note' onClick={() => router.push('/noteform')} icon={<AddIcon />} />
            </ButtonGroup>
          </Box>
        </VStack >
      ) : (
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Box h='40px' bg='white.200'>
            <ButtonGroup size='sm' isAttached variant='outline'>
              <IconButton aria-label='Add Note' onClick={() => router.push('/noteform')} icon={<AddIcon />} />
            </ButtonGroup>
          </Box>
          <Box h='40px' bg='white.200'>
            <div>
              <ul>
                {notes.map((note) => (
                  <li key={note.id}>
                    <div>
                      <Flex>
                        <Box p='4' bg='white.400'>
                          <p>Title: {note.title}</p>
                        </Box>
                        <Spacer />
                        <Box p='4' bg='white.400'>
                          <p>Created at: {note.createdAt.toString()}</p>
                        </Box>
                        <Box p='4' bg='white.400'>
                          <button onClick={() => onUpdateNote(note)}>Update</button>
                          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </Box>
                      </Flex>
                      <div>
                        <p>Content: {note.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        </VStack>
      )}
    </>

  )


};

export default NoteList;

