import './PageProfil.scss';
import LesPublicationsUtil from './LesPublicationsUtil';
import Entete from './Entete';

export default function PageProfil() {
  return (
    <div className="PageProfil">
      <Entete/>
      <div className='info-profil'>

        <div className="nom-util">
          <div className="photo-profil"></div>
          <h2>Le Nom </h2>
        </div>

        <div className='status'>
          <div className='abonnements'>
            <p>Abonnements</p>
            <p>124678</p>
          </div>
          <div className='abonnees'>
            <p>Abonnées</p>
            <p>3214s</p>
          </div>
          <div className='aime'>
            <p>Aime</p>
            <p>123</p>
          </div>
        </div>

      </div>

      <LesPublicationsUtil/>

    </div>
  );
}
