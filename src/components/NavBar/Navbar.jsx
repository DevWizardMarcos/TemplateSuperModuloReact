import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
      
        Dev<span>Portfolio</span>
      </a>

      <nav className="navbar__menu">
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>

    </header>
  );
}

export default Navbar;