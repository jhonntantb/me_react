import { useState } from 'react';
import { sendEmailForm } from '../../api';
import { ErrorMessage, SendMessage, Modal }from '../../components';

import './Contact.css';

const Contact = () => {
  const formInitialDetails ={
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formInformation, setFormInformation] = useState(formInitialDetails);
  const [statusForm, setStatusForm] = useState(200);

  const handleForm =(category, value) => {
    setFormInformation({
      ...formInformation,
      [category]: value
    });
  };

  const submitForm = async(e) => {
    e.preventDefault();
    const res = await sendEmailForm(formInformation);
    setStatusForm(res.code);
    setFormInformation(formInitialDetails);
  };
 
  return (
    <section id='contact' className='contact'>
    <div className='container'>

      <div className='section-title'>
        <h2>Contacto</h2>
        <p>Contactame</p>
      </div>

      <div className='row mt-2'>

        <div className='col-md-6 d-flex align-items-stretch'>
          <div className='info-box'>
            <i className='bx bx-map'></i>
            <h3>Mi Ubicación</h3>
            <p>Jauja, Junin, Perú</p>
          </div>
        </div>

        <div className='col-md-6 mt-4 mt-md-0 d-flex align-items-stretch'>
          <div className='info-box'>
            <i className='bx bx-share-alt'></i>
            <h3>Links Sociales</h3>
            <div className='social-links'>
              <a href='#' className='twitter'><i className='bi bi-twitter'></i></a>
              <br />
              <a href='#' className='linkedin'><i className='bi bi-linkedin'></i></a>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-4 d-flex align-items-stretch'>
          <div className='info-box'>
            <i className='bx bx-envelope'></i>
            <h3>Mi Correo</h3>
            <p>jhonntantb@gmail.com</p>
          </div>
        </div>
        <div className='col-md-6 mt-4 d-flex align-items-stretch'>
          <div className='info-box'>
            <i className='bx bx-phone-call'></i>
            <h3>Telefono</h3>
            <p>+51 910626910</p>
          </div>
        </div>
      </div>

      <form onSubmit={submitForm} className="email-form mt-4">
        <div className='row'>
          <div className='col-md-6 form-group'>
            <input type='text' name='name' className='form-control' id='name' value={formInformation.name} placeholder='Tu nombre' required  onChange={e => handleForm('name', e.target. value)}/>
          </div>
          <div className='col-md-6 form-group mt-3 mt-md-0'>
            <input type='email' className='form-control' name='email' id='email' value={formInformation.email} placeholder='Tu Email' required onChange={e => handleForm('email', e.target. value)}/>
          </div>
        </div>
        <div className='form-group mt-3'>
          <input type='text' className='form-control' name='subject' id='subject' value={formInformation.subject} placeholder='Asunto' required onChange={e => handleForm('subject', e.target. value)}/>
        </div>
        <div className='form-group mt-3'>
          <textarea className='form-control' name='message' rows='5' value={formInformation.message} placeholder='Mensaje' required onChange={e => handleForm('message', e.target. value)}></textarea>
        </div>
        <div className='my-3'>
          {
            statusForm===200? <Modal ><SendMessage/></Modal> : <Modal><ErrorMessage /></Modal>
          }
        </div>
        <div className='text-center'><button type='submit'>Send Message</button></div>
      </form>

    </div>
  </section>
  );
};

export default Contact;