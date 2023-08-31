import './PageProfil.scss';

export default function PageProfil() {
  return (
    <div className="PageProfil">

      <div className='info-profil'>

        <div className="nom-util">
          <span className="photo-profil"></span>
          <h2>Le Nom </h2>
        </div>

        <div className='status'>
          <div className='abonnement'>
            <p>Abonnement</p>
            <p>124678</p>
          </div>
          <div className='abonnées'>
            <p>Abonnées</p>
            <p>3214s</p>
          </div>
          <div className='aime'>
            <p>Aime</p>
            <p>123</p>
          </div>
        </div>

      </div>

    </div>
  );
}
