import CTA from './CTA';
import redSwallow from '../assets/redswallow.png'; // Certifique-se que a imagem está no caminho correto

const Header = () => {
  return (
    <div className="header-container">
      <img src={redSwallow} alt="Andorinha" className="swallow" />
      <div className="title-container">
        <h1 className="title">Mimin, o Brabo</h1>
        <h2 className="subtitle">Tatuador</h2>
      </div>
      <img src={redSwallow} alt="Andorinha" className="swallow-right" /> {/* Espelha essa andorinha */}
      <CTA /> {/* Botão de chamada para ação */}
    </div>
  );
};

export default Header;
