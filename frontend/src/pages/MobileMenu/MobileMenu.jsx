import { useEffect } from 'react';
import { useMainContext } from '../../context/MainContext';
import { navLinks } from '../../data/navLinks';
import { NavLink } from 'react-router-dom';

export const MobileMenu = () => {
  const { isOpenMobileMenu, setIsOpenMobileMenu } = useMainContext();

  const toggleMenu = ({ onClick }) => {
    setIsOpenMobileMenu((prev) => !prev);
    if (onClick) onClick(!isOpenMobileMenu);
  };

  useEffect(() => {
    if (isOpenMobileMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // для iOS
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpenMobileMenu]);

  return (
    <aside className={`mobile-menu ${isOpenMobileMenu ? 'open' : ''}`}>
      <div className="container">
        <ul className="mobile-menu__nav-list">
          {navLinks.map(({ id, to, label }) => (
            <li key={id} className="mobile-menu__nav-item" onClick={toggleMenu}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'mobile-menu__nav-link mobile-menu__nav-link--active'
                    : 'mobile-menu__nav-link'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
