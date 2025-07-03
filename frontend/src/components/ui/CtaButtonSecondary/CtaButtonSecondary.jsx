import PropTypes from 'prop-types';

export const CtaButtonSecondary = ({
  title,
  onClick,
  type = '',
  size = 'large',
  buttonType = 'button',
}) => {
  const classNames =
    type === 'with-arrow'
      ? `cta-button-secondary__arrow-type cta-button-secondary button--text ${size}-button`
      : `cta-button-secondary button--text ${size}-button`;

  return (
    <button type={buttonType} className={classNames} onClick={onClick}>
      <span>{title}</span>
    </button>
  );
};

CtaButtonSecondary.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  buttonType: PropTypes.string,
};
