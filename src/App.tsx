import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SkillList from './components/SkillList';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        
        <section id="projects" className="projects-section container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section container">
          <h2>Technical Skills</h2>
          <SkillList />
        </section>

        <section id="contact" className="contact-section container">
          <h2>Get in Touch</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <a href={portfolioData.hero.socials.email} className="cta-button">Say Hello</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App;
