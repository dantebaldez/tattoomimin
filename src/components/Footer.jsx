import './Footer.css'; // Importando o CSS do Footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Email: miminobrabo@gmail.com</p>
      <p>Telefone: (00) 01234-5678</p>
      <p>Endereço: Minha Casa, Minha Rua, Meu Bairro</p>
      <p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </p>
      <p>&copy; {new Date().getFullYear()} Mimin, o Brabo. Todos os direitos reservados.
			</p>
			<p>
				Nenhum desses dados é real, feitos apenas para testes.
			</p>
    </footer>
  );
};

export default Footer;
