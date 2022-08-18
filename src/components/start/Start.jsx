import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Start = () => {
    const [icon, setIcon] = useState('list');

	const handleIconNav = () => {
		if (icon === 'list') {
			setIcon('x');
		} else {
			setIcon('list');
		}
	};
  return (
    <header id='header'>
			<div className='container'>
				<h1>
					<a href='#'>Jhonatan Tabraj</a>
				</h1>
				<h2>
					Soy un apasionado <span>desarrollador web</span> de Perú
				</h2>
				<nav id='navbar' className='navbar'>
					<ul>
						<li>
							<NavLink className='nav-link active' to='/'>Inicio</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/about'>Sobre Mí</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/resume'>Curriculum</NavLink>
						</li>
						<li>
							<NavLink className='nav-link'to='/portfolio'>Portafolio</NavLink>
						</li>
						<li>
							<NavLink className='nav-link' to='/contact'>Contacto</NavLink>
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