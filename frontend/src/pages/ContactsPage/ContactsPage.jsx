import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Breadcrumb } from '../../components/UI/Breadcrumb';

export const ContactsPage = () => {
  const currentPage = 'Контакти';

  return (
    <div className="page contacts-page">
      <div className="container">
        <Breadcrumb currentPage={currentPage} />
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
      </div>
    </div>
  );
};
