import PropTypes from 'prop-types';

export const SectionTop = ({ title, tagline }) => {
  return (
    <div className="section__top">
      <h4 className="section__title h4--regular">{title}</h4>
      <h1 className="section__tagline h1--bold">{tagline}</h1>
    </div>
  );
};

SectionTop.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
};
