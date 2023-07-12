import './Appli.scss';
import PageAccueil from './PageAccueil';
import Entete from './Entete';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete/>
        <PageAccueil/>
    </div>
  );
}
