import "./ProjectCard.css";
function ProjectCard({
  titulo,
  descricao,
  imagem,
  tecnologias,
  link
}) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={imagem}
        alt={`Imagem do projeto ${titulo}`}
      />

      <div className="project-card__content">
        <h3 className="project-card__title">
          {titulo}
        </h3>

        <p className="project-card__description">
          {descricao}
        </p>

        <span className="project-card__technologies">
          {tecnologias}
        </span>

        <a
          className="project-card__link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Ver projeto
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;