import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-conteiner'>
      <nav id='navbar' className='navbar-home'>
        <h1><NavLink className='nav-link' to='/'>Jhonatan Tabraj</NavLink></h1>
				<ul>
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
			</nav>
    </div>
  );
};

export default Navbar;