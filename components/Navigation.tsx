import React from 'react'
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

export default Navigation