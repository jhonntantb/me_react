/* eslint-disable react/prop-types */
import {  useStateContext } from '../../context/ContextProvider';

const PortfolioCard = ({ title, text, img, id }) => {
   const { handleDetailModal } = useStateContext();

  return (
    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
      <div className='portfolio-wrap'>
        <img src={img} className='img-fluid' alt='' />
        <div className='portfolio-info'>
          <h4>{ title }</h4>
          <p>{ text }</p>
          <div className='portfolio-links'>
            <a href='assets/img/portfolio/portfolio-1.jpg' data-gallery='portfolioGallery' className='portfolio-lightbox' title='App 1'><i className='bi bi-plus-lg'></i></a>
            <a  id={id}><i id={id} onClick={e => handleDetailModal(e.target.id)} className='bi bi-link-45deg'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;