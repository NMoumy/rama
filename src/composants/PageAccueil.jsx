import './PageAccueil.scss';
import Entete from './Entete';
import LesPublications from './LesPublications';

export default function PageAccueil() {
  return (
    <div className="PageAccueil">
        <Entete/>
        <LesPublications/>
        allo les filles
    </div>
  );
}