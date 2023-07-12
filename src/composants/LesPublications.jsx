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
      <UnePublication/>
      <UnePublication/>
      <UnePublication/>
    </div>
  );
}