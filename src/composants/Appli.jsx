import './Appli.scss';
import PageAccueil from './PageAccueil';
import PageConnexion from './PageConnexion';
import PageProfil from './PageProfil';
// import { useEffect, useState, createContext } from 'react';
// export const PageActuelleContext = createContext(null);

export default function Appli() {

  // État de la page
  // const [page, setPage] = useState(null);

  // useEffect(
  //     () => observerEtatConnexion(setPage),
  //     []
  // );

  return (
      <div className="Appli">
        <PageAccueil/>
        <PageConnexion/>
        <PageProfil/>
      </div>
  );
}


// mport Accueil from './Accueil';
// import PageUtilisateur from './PageUtilisateur';
// import './Appli.scss';
// import { useEffect, useState, createContext } from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth, bd } from '../code/init';
// import { doc, setDoc } from 'firebase/firestore';
// import { observerEtatConnexion } from '../code/utilisateur-modele';

// // On créé une variable "globale" qui pourra être partagée avec 
// // toute une hirérarchie de composants d'un seul coup
// export const UtilisateurContext = createContext(null);

// export default function Appli() {
//     // État de connexion d'un utilisateur
//     const [utilisateur, setUtilisateur] = useState(null);

//     useEffect(
//         () => observerEtatConnexion(setUtilisateur),
//         []
//     );

//     return (
//         utilisateur 
//             ? 
//             // On partage la variable de contexte avec le composant
//             // PageUtilisateur et TOUS ses descendants
//             <UtilisateurContext.Provider value={utilisateur}>
//                 <PageUtilisateur /> 
//             </UtilisateurContext.Provider>
//             : 
//             <Accueil/> 
//     );
// }