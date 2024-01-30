import React from 'react'
import { Grid, GridItem, Center, Link } from '@chakra-ui/react'
import Navigation from "@/components/Navigation";

const Home: React.FC = () => {
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
            <Center bg='blue' h='100px' color='white'>
              Bienvenue sur votre plateforme maBible
            </Center>
            <Center bg='blue' h='100px' color='white'>
              <Link href="/notes">
                Cliquer ICI pour gérer vos notes
              </Link>
            </Center>
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default Home
