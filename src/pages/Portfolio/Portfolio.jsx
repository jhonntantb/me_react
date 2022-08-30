/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { projectsData, projectsDetail } from '../../assets/data/dummy';
import { Modal, PortfolioCard, PortfolioDetail } from '../../components';
import {  useStateContext } from '../../context/ContextProvider';
import './Portfolio.css';

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [project, setProject] = useState({});
  const [projectId, setProjectId] =useState(1);
  const { isOpenDetail, closeModalDetail } = useStateContext();


  
  useEffect(() => {
    const projectSelect = projectsDetail.find( e => e.projectId===projectId);
    setProject(projectSelect);
  }, []);

  useEffect(() => {
    setProject(projectsDetail.find( e => e.projectId===projectId));
  }, [projectId]);
  
  console.log('proyecto id sdfnlksdnklsdknl',projectId, project);
  return (
    <section id='portfolio' className='portfolio'>
    <div className='container'>

      <div className='section-title'>
        <h2>Portafolio</h2>
        <p>Mis Trabajos</p>
      </div>
      <div className='row portfolio-container'>
        {
          true && projectsData.map(p => <PortfolioCard setProjectId={setProjectId} key={p.id} {...p} /> )
        }
        {
          isOpenDetail && <Modal key={project.projectId} ><PortfolioDetail key={project.projectId} handleButton={closeModalDetail} {...project} /></Modal> 
        }
      </div>

    </div>
  </section>
  );
};

export default Portfolio;