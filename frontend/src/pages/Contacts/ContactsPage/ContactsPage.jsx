import { ContactForm } from '../ContactForm/ContactForm';
import { ContactInfo } from '../ContactInfo/ContactInfo';
import { BreadCrumb } from '../../../components/UI/BreadCrumb';

export const ContactsPage = () => {
  const currentPage = 'Контакти';

  return (
    <div className="page contacts-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/contacts' },
          ]}
        />
        <div className="contacts-page__content grid">
          <h1 className="contacts-page__title h1--bold grid--onDesktop-2-11">
            Кожен простір має свою історію. Давай напишемо твою разом.
          </h1>
          <h4 className="contacts-page__text h4--regular grid--onDesktop-2-11">
            Залиши повідомлення , і ми зв’яжемося з тобою, щоб обговорити
            деталі.
          </h4>
          <div className="contact-form__wrapper grid--onDesktop-2-11">
            <ContactForm />
          </div>
        </div>
        <div className="contacts-page__details">
          <h3 className="details__title h3--semibold">або напишіть нам</h3>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
