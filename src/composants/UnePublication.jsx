import './UnePublication.scss';

export default function UnePublication() {
  return (
    <div className="UnePublication">
      <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt="" />
      <div className='information'>   
        <div className='info-util'>
        <span>
          <img src="" alt="" />
          <p>username</p>
        </span>
        <span>date</span>
        </div>   
        <p>description</p>
        <button>nb aime</button>
        <button>nb commentaire</button>
      </div>
    </div>
  );
}