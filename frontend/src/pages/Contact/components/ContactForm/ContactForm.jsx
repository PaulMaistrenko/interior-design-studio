export const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          className="name-input"
          placeholder="Введи своє ім’я"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          id="phone"
          name="phone"
          className="phone-input"
          placeholder="Номер телефону"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          id="message"
          name="message"
          className="message-input"
          placeholder="Повідомлення"
          rows="5"
          required
        />
      </div>

      <button type="submit" className="submit-button button button--text">
        Відправити
      </button>
    </form>
  );
};
