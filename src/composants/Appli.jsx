import React from 'react';
import './Appli.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Utilisez "Routes" au lieu de "Switch"
import PageAccueil from './PageAccueil';
import PageConnexion from './PageConnexion';
import PageProfil from './PageProfil';

export default function Appli() {
  return (
    <Router>
      <div className="Appli">
        <Routes> {/* Utilisez "Routes" ici */}
          <Route path="/connexion" element={<PageConnexion />} /> {/* Utilisez "element" au lieu de "component" */}
          <Route path="/profil" element={<PageProfil />} />
          <Route path="/" element={<PageAccueil />} />
        </Routes>
      </div>
    </Router>
  );
}


// import './Appli.scss';
// import PageAccueil from './PageAccueil';
// import PageConnexion from './PageConnexion';
// import PageProfil from './PageProfil';
// import { useEffect, useState, createContext } from 'react';
// export const PageActuelleContext = createContext(null);

// export default function Appli() {

//   // État de la page
//   const [page, setPage] = useState(null);

//   // useEffect(
//   //     () => observerEtatConnexion(setPage),
//   //     []
//   // );


//   return (
//       <div className="Appli">
//         <PageActuelleContext.Provider value={page}>    
//           <PageConnexion/>    
//           <PageAccueil/>
//           <PageProfil/>
//         </PageActuelleContext.Provider>
//       </div>
//   );
// }

