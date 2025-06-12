import { Link } from 'react-router-dom';
import styles from './MainLogo.module.scss';

export const MainLogo = () => {
  return <Link to="/" className={`${styles.mainLogo} bg-image`} />;
};
