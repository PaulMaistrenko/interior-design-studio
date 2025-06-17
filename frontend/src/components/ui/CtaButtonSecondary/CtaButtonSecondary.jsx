import { Link } from 'react-router-dom';

export const CtaButtonPrimary = () => {
  return (
    <Link
      to="/services"
      className="cta-button-secondary button--text"
      onClick={() => scrollToTop()}
    >
      <span>Всі послуги</span>
    </Link>
  );
};
