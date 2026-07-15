import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ECommerce from '../../assets/ECommerce.png'
import ECommerceProject from '../../assets/ECommerceProject.png'
import TaskManager from '../../assets/TaskManager.png'
import TaskManagerProject from '../../assets/TaskManagerProject.png'
import WeatherApp from '../../assets/WeatherApp.png'
import WeatherAppProject from '../../assets/WeatherAppProject.png'

const listaDeProjetos = [
  {
    titulo: "E-Commerce",
    descricao:
      "Loja virtual completa com carrinho, produtos e checkout.",
    tecnologias: "React, Context API, Tailwind CSS",
    imagem: ECommerce,
    link: ECommerceProject,
  },
  {
    titulo: "Task Manager",
    descricao:
      "Gerenciador de tarefas com criação, filtros e categorias.",
    tecnologias: "React, LocalStorage",
    imagem: TaskManager,
    link: TaskManagerProject,
  },
  {
    titulo: "Weather App",
    descricao:
      "Aplicação do clima consumindo API externa com busca de cidade.",
    tecnologias: "React, API, Styled Components",
    imagem: WeatherApp,
    link: WeatherAppProject,
  },
  {
    titulo: "Weather App",
    descricao:
      "Aplicação do clima consumindo API externa com busca de cidade.",
    tecnologias: "React, API, Styled Components",
    imagem: WeatherApp,
    link: WeatherAppProject,
  },
];

function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="projects__header">
        <h2 className="section-title">
          Meus <span>Projetos</span>
        </h2>

        <a href="#projetos" className="projects__see-all">
          Ver todos →
        </a>
      </div>

      <div className="projects__grid">
        {listaDeProjetos.map((projeto) => (
          <ProjectCard
            key={projeto.titulo}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            tecnologias={projeto.tecnologias}
            imagem={projeto.imagem}
            link={projeto.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
