/*import React from 'react'
import { Menu, MenuItem, MenuDivider, MenuGroup, Link } from '@chakra-ui/react'

const Navigation = () => {
  return (
    <div>
      <Menu>
        <MenuItem>maBible</MenuItem>
        <MenuItem as='a' href='/'>Accueil</MenuItem>
        <MenuItem as='a' href='/bible'>Bible</MenuItem>
        <MenuItem as='a' href='/medias'>Médias</MenuItem>
        <MenuItem as='a' href='/plan'>Plan</MenuItem>
        <MenuDivider />
        <MenuGroup title='Mes activités'>
          <MenuItem as='a' href='/notes'>Notes</MenuItem>
          <MenuItem as='a' href='/favoris'>Favoris</MenuItem>
          <MenuItem as='a' href='/listes'>Listes</MenuItem>
          <MenuItem as='a' href='/etiquettes'>Étiquettes</MenuItem>
          <MenuItem as='a' href='/signets'>Signets</MenuItem>
          <MenuItem as='a' href='/plus'>Plus</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem as='a' href='/profil'>Profil</MenuItem>
      </Menu>
    </div>
  )
}

export default Navigation*/
'use client'
import React from 'react'
import { Menu, MenuItem, MenuDivider, MenuGroup, Link } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const Navigation = () => {
  const router = useRouter();
  return (
    <div>
      <Menu>
        <MenuItem>maBible</MenuItem>
        <MenuItem as='a' onClick={() => router.push('/')}>Accueil</MenuItem>
        <MenuItem as='a' >Bible</MenuItem>
        <MenuItem as='a' >Médias</MenuItem>
        <MenuItem as='a' >Plan</MenuItem>
        <MenuDivider />
        <MenuGroup title='Mes activités'>
          <MenuItem as='a' onClick={() => router.push('/notes')}>Notes</MenuItem>
          <MenuItem as='a' >Favoris</MenuItem>
          <MenuItem as='a' >Listes</MenuItem>
          <MenuItem as='a' >Étiquettes</MenuItem>
          <MenuItem as='a' >Signets</MenuItem>
          <MenuItem as='a' >Plus</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem as='a' >Profil</MenuItem>
      </Menu>
    </div>
  )
}

export default Navigation