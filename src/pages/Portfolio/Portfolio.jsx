import { projectsData } from '../../assets/data/dummy';
import { PortfolioCard } from '../../components';

import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
    <div className='container'>

      <div className='section-title'>
        <h2>Portafolio</h2>
        <p>Mis Trabajos</p>
      </div>
      <div className='row portfolio-container'>
        {
          projectsData.map(project => <PortfolioCard key={project.title} {...project} /> )
        }
      </div>

    </div>
  </section>
  );
};

export default Portfolio;