import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';


const Start = () => {
    const [icon, setIcon] = useState('list');
	const [styleMovil, setStyleMovil] = useState('');
	const { navPosition, setNavClass, initPage, setNavPosition, setInitPage } = useStateContext();

	const location = useLocation();

	const handleIconNav = () => {
		if (icon === 'list') {
			setIcon('x');
			setStyleMovil('navbar-mobile');
		} else {
			setIcon('list');
			setStyleMovil('');
		}
	};

	const handleStyleNavbar = (value) =>{
		setNavClass(value);
		setStyleMovil('');
		setIcon('list');
	};

	useEffect(() => {
		if(location.pathname==='/'){
			setNavPosition('');
			setInitPage('active');
		}else{
			setNavPosition('header-top');
			setInitPage('');
		}
	}, []);
	
  return (
    <header id='header' className={`${navPosition}`}>
			<div className='container'>
				<h1>
					<NavLink to='/' onClick={() => setNavClass('')}>Jhonatan Tabraj</NavLink>
				</h1>
				<h2>
					Soy un apasionado <span>desarrollador web</span> de Perú
				</h2>
				<nav id='navbar' className={`navbar ${styleMovil}`}>
					<ul>
						<li>
							<NavLink className={`nav-link ${initPage}`} to='/' onClick={() => handleStyleNavbar('')}>Inicio</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/about' onClick={() => handleStyleNavbar('header-top')}>Sobre Mí</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/resume' onClick={() => handleStyleNavbar('header-top')}>Curriculum</NavLink>
						</li>
						<li>
							<NavLink className='nav-link'to='/portfolio' onClick={() => handleStyleNavbar('header-top')}>Portafolio</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/contact' onClick={() => handleStyleNavbar('header-top')}>Contacto</NavLink>
						</li>
					</ul>
					<i
						onClick={handleIconNav}
						className={`bi bi-${icon} mobile-nav-toggle`}
					></i>
				</nav>

				<div className='social-links'>
					<a
						href='https://github.com/jhonntantb'
						target='_blank'
						className='github'
						rel='noreferrer'
					>
						<i className='bi bi-github'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/jhonatan-tabraj/'
						target='_blank'
						className='linkedin'
						rel='noreferrer'
					>
						<i className='bi bi-linkedin'></i>
					</a>
				</div>
			</div>
		</header>
  );
};

export default Start;