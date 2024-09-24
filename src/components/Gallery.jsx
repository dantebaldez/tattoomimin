import './Gallery.css';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';
import dog6 from '../assets/dog6.png';

function Gallery() {
  return (
    <div>
      <h3 className="gallery-title">Galeria</h3>
      <div className="gallery">
        <div className="gallery-row">
          <img src={dog1} alt="Dog 1" className="gallery-img" />
          <img src={dog2} alt="Dog 2" className="gallery-img" />
          <img src={dog3} alt="Dog 3" className="gallery-img" />
        </div>
        <div className="gallery-row">
				<img src={dog4} alt="Dog 4" className="gallery-img" />
          <img src={dog5} alt="Dog 5" className="gallery-img" />
          <img src={dog6} alt="Dog 6" className="gallery-img" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
