/* eslint-disable react/prop-types */
import { projectsDetail } from '../../assets/data/dummy';
import './PortfolioDetail.css';
import Carousel from '../carousel/Carousel';
import ButtonClose from '../Button/ButtonClose';

const PortfolioDetail = ({ title, projectInfo, description, handleButton }) => {
  const detailFilter = projectsDetail.find(e => e.projectId ===1);

  return (
    <section id='portfolio' className='portfolio'>
      <div id='portfolio-details' className='portfolio-details'>
        <div className='container'>
        <ButtonClose closeModal={handleButton} />
          <div className='row'>
            <div className='col-lg-8'>
              <h2 className='portfolio-title'>{title}</h2>
              <div className='portfolio-details-slider swiper'>
                <div className='swiper-wrapper align-items-center'>
                  {
                    <Carousel  imgData={detailFilter.images}/>
                  }
                </div>
                <div className='swiper-pagination'></div>
              </div>
            </div>
            <div className='col-lg-4 portfolio-info'>
              <h3>Información del Proyecto</h3>
              <ul>
                <li><strong>Categoria</strong>: {projectInfo.category}</li>
                <li><strong>Proyecto URL</strong>: <a href={projectInfo.url} target='_blank' rel="noreferrer">{projectInfo.url}</a></li>
                <li><strong>Repositorio URL</strong>: <a href={projectInfo.url} target='_blank' rel="noreferrer">{projectInfo.url}</a></li>
              </ul>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;