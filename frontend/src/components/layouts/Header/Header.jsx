import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../data/navLinks.js';
import { MainLogo } from '../../ui/MainLogo';

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        setIsSticky(true);
      } else if (currentScrollY < lastScrollY && currentScrollY <= 250) {
        setIsSticky(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'header--sticky' : ''}`}>
      <div className="container">
        <nav className="header__nav-bar">
          <MainLogo className="header__logo" />
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
