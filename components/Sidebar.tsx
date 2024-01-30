import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/">
              maBible
            </Link>
          </li>
          <li>
            <Link href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/bible">
              Bible
            </Link>
          </li>
          <li>
            <Link href="/medias">
              Médias
            </Link>
          </li>
          <li>
            <Link href="/plan">
              Plan
            </Link>
          </li>
          <li>
            <Link href="/mes-activites">
              Mes activités
            </Link>
          </li>
          <li>
            <Link href="/notes">
              Notes
            </Link>
          </li>
          <li>
            <Link href="/favoris">
              Favoris
            </Link>
          </li>
          <li>
            <Link href="/listes">
              Listes
            </Link>
          </li>
          <li>
            <Link href="/etiquettes">
              Étiquettes
            </Link>
          </li>
          <li>
            <Link href="/signets">
              Signets
            </Link>
          </li>
          <li>
            <Link href="/plus">
              Plus
            </Link>
          </li>
          <li>
            <Link href="/profil">
              Profil
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
