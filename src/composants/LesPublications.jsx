import './LesPublications.scss';
import UnePublication from './UnePublication';

export default function LesPublications() {
  return (
    <div className="LesPublications">
      <div className='menu-secondaire'>
        <button>nouveaute</button>
        <button>populaire</button>
        <button>abonnement</button>
      </div>
      <div className="bloc-public">
        <UnePublication/>
        <UnePublication/>
        <UnePublication/>
      </div>
    </div>
  );
}