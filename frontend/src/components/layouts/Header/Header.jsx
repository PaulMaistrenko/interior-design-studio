import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../data/navLinks.js';
import { MainLogo } from '../../ui/MainLogo';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav-bar">
          <MainLogo className={'header__logo'} />
          <ul className="header__nav-list">
            {navLinks.map(({ id, to, label }) => (
              <li key={id} className="header__nav-item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? 'header__nav-link header__nav-link--active'
                      : 'header__nav-link'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="header__menu-open-button bg-image"
            aria-label="Відкрити меню"
          ></button>
        </nav>
      </div>
    </header>
  );
};
