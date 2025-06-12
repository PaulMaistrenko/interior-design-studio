import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { navLinks } from '../../../data/navLinks.js';
import { MainLogo } from '../../ui/MainLogo';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navBar}>
          <MainLogo />
          <ul className={styles.navList}>
            {navLinks.map(({ id, to, label }) => (
              <li key={id} className={styles.navItem}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`${styles.menuOpenButton} bg-image`}
            aria-label="Відкрити меню"
          ></button>
        </nav>
      </div>
    </header>
  );
};
