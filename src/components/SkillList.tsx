import { portfolioData } from '../data/portfolio';

const SkillList = () => {
  return (
    <div className="skills-grid">
      {portfolioData.skills.map((skillGroup) => (
        <div key={skillGroup.category} className="skill-group">
          <h4>{skillGroup.category}</h4>
          <ul>
            {skillGroup.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
