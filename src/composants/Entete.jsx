import './Entete.scss';
import React, { useState } from 'react';
// import PageProfil from './PageProfil';

export default function Entete() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  const gererBurger = () => {
    setMenuOuvert(!menuOuvert);
  };
  
  return (
    <div className="Entete">
      <nav>
        
        <div className={`btn-burger ${menuOuvert ? 'btn--change' : ''}`} onClick={gererBurger}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className={`menu-lateral ${menuOuvert ? 'ouvert' : ''}`}>
          <h3>accueil</h3>
          <h3>photo aimer</h3>
          <h3>parametre</h3>
          <h3>profil</h3>
          <div>
            <h3>abonnement</h3>
            <p>username</p>
            <p>username</p>
            <p>username</p>
          </div>
        </div>

        <a href="https://codepen.io/WhisnuYs/pen/XWdpdGP">PhotoRama</a>
        <a href="https://codepen.io/WhisnuYs/pen/XWdpdGP">recherche</a>
        <a href="https://codepen.io/WhisnuYs/pen/XWdpdGP">Profil</a>

      </nav>
    </div>
  );

}
