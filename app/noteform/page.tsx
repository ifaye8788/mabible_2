
'use client'
import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";
import NoteForm from "@/components/NoteForm";

const NoteFormPage = () => {

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
                    <GridItem pl='2' bg='blue.300' area={'footer'}>
                        <NoteForm />
                    </GridItem>
                </Grid>
            </div>
        </>
    )
}

export default NoteFormPage