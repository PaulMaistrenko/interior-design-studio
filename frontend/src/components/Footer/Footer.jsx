import { MainLogo } from '../UI/MainLogo';
//import './Footer';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <MainLogo className={'main-logo--footer'} />
          <nav className="footer__contacts">
            <a
              href="mailto:tavrdesignhouse@gmail.com"
              className="footer__contact email"
            >
              tavrdesignhouse@gmail.com
            </a>
            <p>|</p>
            <a href="tel:+380931389963" className="footer__contact mobile">
              +38 093 138 99 63
            </a>
            <p>|</p>
            <div className="footer__socials">
              <a href="/" className="footer__social footer__social--instagram">
                instagram
              </a>
              <a href="/" className="footer__social footer__social--telegram">
                telegram
              </a>
              <a href="/" className="footer__social footer__social--viber">
                viber
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};
