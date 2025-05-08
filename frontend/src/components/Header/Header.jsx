import { NavLink } from 'react-router-dom';
import { MainLogo } from '../UI/MainLogo';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [topOffset, setTopOffset] = useState(48);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setTransitionEnabled(true);
        setTopOffset(0);
      } else if (currentScrollY < prevScrollY.current) {
        setTransitionEnabled(false);
        setTopOffset(48);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className="header"
      style={{
        top: `${topOffset}px`,
        transition: transitionEnabled ? 'top 0.2s ease' : 'none',
      }}
    >
      <div className="container">
        <div className="header__content">
          <MainLogo className={'main-logo--header'} />
          <nav className="header__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  Головна
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  Послуги
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  Портфоліо
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  Блог
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
