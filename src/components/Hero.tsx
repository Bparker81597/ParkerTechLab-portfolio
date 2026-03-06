import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section className="hero">
      <div className="container">
        <h1>{hero.name}</h1>
        <h2>{hero.title}</h2>
        <p className="description">{hero.description}</p>
        <div className="social-links">
          <a href={hero.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={hero.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={hero.socials.email}>Email</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
