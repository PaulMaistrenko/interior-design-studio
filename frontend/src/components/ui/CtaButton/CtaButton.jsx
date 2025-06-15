import { Link } from 'react-router-dom';
import styles from './CtaButton.module.scss';

export const CtaButton = () => {
  return (
    <Link to="/contact" className={`${styles.ctaButton} button--text`}>
      Зв&#39;язатися з нами
    </Link>
  );
};
