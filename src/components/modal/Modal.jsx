/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ children, isOpen }) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className=" modal-container">
        {children}
      </div>
    </article>
  );
};

export default Modal;