import { motion } from 'framer-motion';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';

export const Contact = () => {
  const currentPage = 'Контакти';

  return (
    <motion.main
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <main className="page contact-page">
        <div className="container">
          <BreadCrumb
            items={[
              { title: 'Головна', href: '/' },
              { title: currentPage, href: '/contacts' },
            ]}
          />
          <div className="contact-page__content grid">
            <h1 className="contact-page__title h1--bold grid--onDesktop-2-11">
              Кожен простір має свою історію. Давай напишемо твою разом.
            </h1>
            <h4 className="contact-page__text h4--regular grid--onDesktop-2-11">
              Залиши повідомлення , і ми зв’яжемося з тобою, щоб обговорити
              деталі.
            </h4>
            <div className="contact-form__wrapper grid--onDesktop-2-11">
              <ContactForm />
            </div>
          </div>
          <div className="contact-page__details">
            <h3 className="details__title h3--semibold">або напишіть нам</h3>
            <ContactInfo />
          </div>
        </div>
      </main>
    </motion.main>
  );
};
