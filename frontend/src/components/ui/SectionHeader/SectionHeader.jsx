import PropTypes from 'prop-types';
import styles from './SectionHeader.module.scss';

export const SectionHeader = ({ title, slogan }) => {
  return (
    <div className={styles.sectionHeader}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <h4 className={`${styles.title} h4--regular`}>{title}</h4>
          <p className={`${styles.slogan} h1--bold`}>{slogan}</p>
        </div>
      </div>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string,
};
