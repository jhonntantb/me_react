/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { projectsData, projectsDetail } from '../../assets/data/dummy';
import { Modal, PortfolioCard, PortfolioDetail } from '../../components';
import { useModal } from '../../hooks/useModal';
import {  useStateContext } from '../../context/ContextProvider';
import './Portfolio.css';

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [project,setProject] = useState();
  const [isOpenDetail, openModalDetail, closeModalDetail] = useModal();
  const { projectId } = useStateContext();


  
  useEffect(() => {
    const projectSelect = projectsDetail.find( e => e.projectId===projectId);
    setProject(projectSelect);
  }, [projectId]);
  
  console.log('este es el id del proyecto', project);
  return (
    <section id='portfolio' className='portfolio'>
    <div className='container'>

      <div className='section-title'>
        <h2>Portafolio</h2>
        <p>Mis Trabajos</p>
      </div>
      <div className='row portfolio-container'>
        {
          true && projectsData.map(p => <PortfolioCard key={p.id} handleDetail={openModalDetail}  {...p} /> )
        }
        {
          project && <Modal key={project.projectId} isOpen={isOpenDetail}><PortfolioDetail key={project.projectId} handleButton={closeModalDetail} {...project} /></Modal> 
        }
      </div>

    </div>
  </section>
  );
};

export default Portfolio;