import './UnePublication.scss';

export default function UnePublication() {
  return (
    <div className="UnePublication">
      <img src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt="" />
      <div className='information'>  

        <div className='haut-publi'>
          <div className='info-util'>
            <div></div>
            <p>username</p>
          </div>  
          <p>date</p> 
        </div>

        <p className='desc'>
          description : It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. The point of using 
          Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
          7to using 'Content here, content here', making it look like readable English. 
          Many desktop publishing packages and web page editors. 
        </p>
        <button>nb aime</button>
        <button>nb commentaire</button>
      </div>

    </div>
  );
}