import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { MainLogo } from '../UI/MainLogo';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <MainLogo />
          <nav className="nav-bar">
            <ul className={styles.navList}>
              <li className="nav-item">
                <NavLink to="/main" className="nav-link">
                  Головна
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Послуги
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link">
                  Портфоліо
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Блог
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
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
