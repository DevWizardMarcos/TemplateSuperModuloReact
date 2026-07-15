import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

const listaDeSkills = [
  { nome: "HTML5", icone: "https://cdn.simpleicons.org/html5" },
  { nome: "CSS3", icone: "https://cdn.simpleicons.org/css" },
  { nome: "JavaScript", icone: "https://cdn.simpleicons.org/javascript" },
  { nome: "React", icone: "https://cdn.simpleicons.org/react" },
  { nome: "Git", icone: "https://cdn.simpleicons.org/git" },
  { nome: "GitHub", icone: "https://cdn.simpleicons.org/github/white" },
  { nome: "Tailwind CSS", icone: "https://cdn.simpleicons.org/tailwindcss" },
  { nome: "Figma", icone: "https://cdn.simpleicons.org/figma" },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        Minhas <span>Skills</span>
      </h2>

      <div className="skills__grid">
        {listaDeSkills.map((skill) => (
          <SkillCard
            key={skill.nome}
            nome={skill.nome}
            icone={skill.icone}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
