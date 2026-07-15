import "../NavBar/navbar.css";
function NavBar() {
  return (
    <header className="navBar">
      <span>DevPortifolio</span>
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#sobre">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default NavBar;
