import "./SkillCard.css";

function SkillCard({ nome, icone }) {
  return (
    <article className="skill-card">
      <img
        className="skill-card__icon"
        src={icone}
        alt={`Logo de ${nome}`}
      />

      <span className="skill-card__name">
        {nome}
      </span>
    </article>
  );
}

export default SkillCard;