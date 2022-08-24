import { useState } from 'react';
import { projectsData, projectsDetail } from '../../assets/data/dummy';
import { PortfolioCard, PortfolioDetail } from '../../components';

import './Portfolio.css';

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [showDetail, setShowDetail] = useState(true);
  return (
    <section id='portfolio' className='portfolio'>
    <div className='container'>

      <div className='section-title'>
        <h2>Portafolio</h2>
        <p>Mis Trabajos</p>
      </div>
      <div className='row portfolio-container'>
        {
          false && projectsData.map(project => <PortfolioCard key={project.id} {...project} /> )
        }
        {
          showDetail&& projectsDetail.filter(e => e.projectId ===1).map(p => <PortfolioDetail key={p.projectId} {...p} />)  
        }
      </div>

    </div>
  </section>
  );
};

export default Portfolio;