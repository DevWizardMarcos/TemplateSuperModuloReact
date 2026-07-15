import "./Hero.css";
import avatar from "../../assets/avatar.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="hero__eyebrow">
          {"</>"} Olá, eu sou Aline{"</>"}
        </span>

        <h1 className="hero__title">
          Desenvolvedora
          <strong>Front-End</strong>
        </h1>

        <p className="hero__description">
          Transformo ideias em interfaces modernas, responsivas e experiências
          incríveis na web.
        </p>

        <div className="hero__actions">
          <a href="#projetos" className="button button--primary">
            Ver meus projetos
          </a>

          <a href="#contato" className="button button--secondary">
            Entrar em contato
          </a>
        </div>

        <div className="hero__socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            💼
          </a>

          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.simpleicons.org/instagram/white"
              alt="Instagram"
            />
          </a>

          <a href="mailto:seuemail@email.com">✉️</a>
        </div>
      </div>

      <div className="hero__image-container">
        <img
          className="hero__image"
          src={avatar}
          alt="Avatar da desenvolvedora"
        />
      </div>
    </section>
  );
}

export default Hero;
