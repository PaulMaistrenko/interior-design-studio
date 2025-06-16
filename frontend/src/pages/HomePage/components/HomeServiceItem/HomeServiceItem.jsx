import styles from './HomeServiceItem.module.scss';
import PropTypes from 'prop-types';

export const HomeServiceItem = ({ service }) => {
  const { title, description } = service;
  return (
    <li className={styles.homeServicesItem}>
      <article className={styles.serviceArticle}>
        <h4 className={`${styles.serviceTitle} h4--bold`}>{title}</h4>
        <p className={styles.serviceDescription}>{description}</p>
      </article>
      <div className={`${styles.servicePoster1} bg-image`}></div>
    </li>
  );
};

HomeServiceItem.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
