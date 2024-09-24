import './About.css';
import artist from '../assets/artist.png';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img src={artist} alt="Artist" className="artist" />
        <div className="text-content">
          <h3 className="about-title">Sobre mim</h3>
          <p className="description">
            Mimin, o Brabo, é um tatuador apaixonado por arte e autoexpressão. Com um estilo único e um toque pessoal em cada criação, ele transforma a pele em uma tela, oferecendo experiências personalizadas para seus clientes. E como está dito aqui, ele é brabo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
