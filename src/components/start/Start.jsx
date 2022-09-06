import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';

const Start = () => {
    const [icon, setIcon] = useState('list');
	const { navPosition, setNavClass, initPage } = useStateContext();

	const handleIconNav = () => {
		if (icon === 'list') {
			setIcon('x');
		} else {
			setIcon('list');
		}
	};
  return (
    <header id='header' className={`${navPosition}`}>
			<div className='container'>
				<h1>
					<NavLink to='/' onClick={() => setNavClass('')}>Jhonatan Tabraj</NavLink>
				</h1>
				<h2>
					Soy un apasionado <span>desarrollador web</span> de Perú
				</h2>
				<nav id='navbar' className='navbar'>
					<ul>
						<li>
							<NavLink className={`nav-link ${initPage}`} to='/' onClick={() => setNavClass('')}>Inicio</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/about' onClick={() => setNavClass('header-top')}>Sobre Mí</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/resume' onClick={() => setNavClass('header-top')}>Curriculum</NavLink>
						</li>
						<li>
							<NavLink className='nav-link'to='/portfolio' onClick={() => setNavClass('header-top')}>Portafolio</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/contact' onClick={() => setNavClass('header-top')}>Contacto</NavLink>
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