import './PageConnexion.scss';
// import React, { useContext } from 'react';
// import { PageActuelleContext } from './Appli';

export default function PageConnexion() {
  // let pageActuelle = useContext(PageActuelleContext); 
  // const accueil = "accueil";
  const accederApp = () => {

  };

  return (
    <div className="PageConnexion">

      <h1>RAMA</h1>

      <div className='option-connexion'>

        <h2>Connexion</h2>
        <form onSubmit="">
          <div className="champ-utilisateur">
            <label htmlFor="n1omUtilisateur">Nom d'utilisateur</label>
            <input
              type="text"
              required
            />
          </div>
          <div className="champ-mdp">
            <label htmlFor="motDePasse">Mot de passe</label>
            <input
              type="password"
              required
            />
          </div>
          <div className="champ-envoie">
            <button type="submit" onClick={accederApp}>Se connecter</button>
          </div>
        </form>

      </div>

      {/* <div className='option-inscription'>

        <h2>Inscription</h2>
        <form action="">
          <div className="champ-utilisateur">
            <label htmlFor="nomUtilisateur">Nom d'utilisateur</label>
            <input
              type="text"
              required
            />
          </div>

          <div className="champ-mail">
            <label htmlFor="mail">e-mail</label>
            <input
              type="email"
              required
            />
          </div>

          <div className="champ-mdp">
            <label htmlFor="nomMotDePasse">Mot de passe</label>
            <input
              type="password"
              required
            />
          </div>

          <div className="champ-envoie">
              <button type="submit">s'inscrire</button>
          </div>
        </form>

      </div> */}

    </div>
  );
}
