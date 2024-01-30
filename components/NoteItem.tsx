import React from 'react'
import { Flex, Spacer, Box } from '@chakra-ui/react'

const NoteItem = () => {
    return (
        <>
            <div>
                <Flex>
                    <Box p='4' bg='red.400'>
                        Titre
                    </Box>
                    <Spacer />
                    <Box p='4' bg='green.400'>
                        Date
                    </Box>
                    <Spacer />
                    <Box p='4' bg='green.400'>
                        Button
                    </Box>
                </Flex>
                <div>
                    Contenu
                </div>
            </div>
        </>

    )
}

export default NoteItem