import Avatar from "../../Components/Avatar.png";
import AvatarSorrindo from "../../Components/AvatarSorrindo.png";
import "../Hero/hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Avatar})` }}>
      <div
        className="hero-bg-alt"
        style={{ backgroundImage: `url(${AvatarSorrindo})` }}
      ></div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-badge">
          <b>Bem-vindo ao meu portfólio</b>
        </span>
        <h1 className="hero-title">
          Olá, eu sou <span className="hero-name"> Aline</span>
        </h1>
        <p className="hero-subtitle">
          Desenvolvedora Front-end criando interfaces modernas e experiências
          digitais que encantam.
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn btn-ghost">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
