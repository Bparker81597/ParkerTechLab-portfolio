import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
