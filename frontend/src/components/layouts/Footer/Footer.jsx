import { MainLogo } from '../../ui/MainLogo';
import styles from './Footer.module.scss';
import { contactLinks } from '../../../data/contactLinks';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.navBar}>
          <MainLogo className="footer" />
          <ul className={styles.contactList}>
            {contactLinks.map(({ id, to, label }, index) => (
              <li key={id} className={`${styles.navItem} button--text`}>
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.navLink} ${
                    index >= 2 && index <= 4 ? styles.underline : ''
                  }`}
                >
                  {label}
                </a>
                {id < 3 && (
                  <div className={`${styles.separator} button--text`}></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
