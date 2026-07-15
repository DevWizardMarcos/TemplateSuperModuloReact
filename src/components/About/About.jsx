import "./About.css";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__card">
        <div className="about__info">
          <span className="about__avatar">👤</span>

          <div>
            <h2 className="about__title">Sobre mim</h2>
            <p className="about__text">
              Sou apaixonado por tecnologia e desenvolvimento web.
              Atualmente foco em criar aplicações com React, JavaScript,
              HTML, CSS e boas práticas de código.
            </p>
          </div>
        </div>

        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-icon">📅</span>
            <strong>1+</strong>
            <span>Anos de experiência</span>
          </div>

          <div className="about__stat">
            <span className="about__stat-icon">{"</>"}</span>
            <strong>10+</strong>
            <span>Projetos concluídos</span>
          </div>

          <div className="about__stat">
            <span className="about__stat-icon">🚀</span>
            <strong>Sempre</strong>
            <span>Aprendendo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
