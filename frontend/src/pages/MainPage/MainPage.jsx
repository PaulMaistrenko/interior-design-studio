import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className="page main-page">
      <section className="hero bg-image">
        <div className="container">
          <div className="hero-section__title">
            МИ СТВОРЮЄМО ІНТЕР’ЄРИ,
            <br /> В ЯКИХ ХОЧЕТЬСЯ ЖИТИ
          </div>
          <Link
            to="/contacts"
            className="hero-section__button button button--text"
          >
            Зв’язатися з нами
          </Link>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about__top">
            <h4 className="about__title h4--regular">Про нас</h4>
            <h1 className="about__tagline h1--bold">
              “Наші корені — наша сила”
            </h1>
          </div>
          <div className="about__content grid">
            <div className="about__subtitle grid--onDesktop-5-12 h4--bold">
              Tavr Design House — це не просто студія інтер’єру. Це історія,
              вкорінена в землі Таврії — давньої назви нашого рідного Херсона
            </div>
            <div className="about__text grid--onDesktop-4-8 ">
              У своїй роботі ми поєднуємо архітектурну міцність і візуальну
              виразність. Надихаючись символом таврового профілю —
              конструктивного елементу, що уособлює витривалість і практичність,
              — ми створюємо інтер’єри, які служать роками.
            </div>
            <div className="about__poster-1 grid--onDesktop-1-3 bg-image"></div>
            <div className="about__poster-2 grid--onDesktop-9-12 bg-image"></div>
          </div>
          <div className="about__bottom grid">
            <h4 className="about__title h4--regular">Цінності</h4>
            <article className="about__article grid--onDesktop-5-8">
              <h3 className="article__title h3--semibold">Емоційність</h3>
              <p className="article__text">
                Ми створюємо інтер’єри, які викликають щирі емоції, надихають та
                дарують відчуття спокою. Для нас важливо, щоб простір не просто
                виглядав гарно, а мав душу й атмосферу, у якій хочеться жити.
              </p>
            </article>
            <article className="about__article grid--onDesktop-9-12">
              <h3 className="article__title h3--semibold">Індивідуальність</h3>
              <p className="article__text">
                Кожен наш проєкт — це унікальне поєднання естетики,
                функціональності та стилю, що відображає характер і потреби
                клієнта. Ми не працюємо за шаблонами — ми втілюємо саме вашу
                історію в інтер’єрі.
              </p>
            </article>
            <article className="about__article grid--onDesktop-5-8">
              <h3 className="article__title h3--semibold">
                Комфорт і гармонія
              </h3>
              <p className="article__text">
                Ми віримо, що інтер’єр — це не набір меблів і кольорів. Це —
                відчуття. Відчуття комфорту, тепла, гармонії. Простір має бути
                продовженням внутрішнього світу людини.
              </p>
            </article>
            <article className="about__article grid--onDesktop-9-12">
              <h3 className="article__title h3--semibold">
                Якість і надійність
              </h3>
              <p className="article__text">
                Усе, що ми робимо, — продумано до деталей. Від вибору матеріалів
                до фінального штриха — ми прагнемо до бездоганного результату,
                який не втрачає актуальності з часом.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="services__top">
            <h4 className="services__title h4--regular">Послуги</h4>
            <h1 className="services__tagline h1--bold">
              “Перший крок до інтер’єру мрії”
            </h1>
          </div>
          <ul className="services__list">
            <li className="services__item">
              <article className="service__article">
                <h4 className="service__title h4--bold">
                  Дизайн інтер’єру квартир
                </h4>
                <p className="service__text">
                  Створюємо функціональні та естетичні інтер’єри, адаптовані під
                  стиль життя мешканців. Раціональне зонування, продумані деталі
                  та атмосфера, в якій хочеться залишатись.
                </p>
              </article>
              <div className="service__image service__image--1 bg-image"></div>
            </li>
            <li className="services__item">
              <article className="service__article">
                <h4 className="service__title h4--bold">
                  Дизайн приватного житла
                </h4>
                <p className="service__text">
                  Затишні простори для родинного життя. Враховуємо архітектурні
                  особливості, побажання клієнта та дух місця.
                </p>
              </article>
              <div className="service__image service__image--2 bg-image"></div>
            </li>
            <li className="services__item">
              <article className="service__article">
                <h4 className="service__title h4--bold">
                  Дизайн комерційних приміщень
                </h4>
                <p className="service__text">
                  Унікальні інтер’єри для офісів, ресторанів, салонів і
                  магазинів
                </p>
              </article>
              <div className="service__image service__image--3 bg-image"></div>
            </li>
          </ul>
          <Link
            to="/contacts"
            className="service-section__button button button--text"
          >
            <span>Всі послуги</span>
          </Link>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <div className="projects__top">
            <h4 className="projects__title h4--regular">Проєкти</h4>
            <h1 className="projects__tagline h1--bold">
              “Інтер’єр, що живе з вами”
            </h1>
          </div>
          <ul className="projects__list grid">
            <li className="projects__item natural-flow bg-image grid--onDesktop-1-6">
              <Link to="/" className="project__link">
                <h3 className="project__title h3--semibold">Natural Flow</h3>
                <div className="right__arrow-icon bg-image"></div>
              </Link>
            </li>
            <li className="projects__item soft-minimal bg-image grid--onDesktop-7-12">
              <Link to="/" className="project__link">
                <h3 className="project__title h3--semibold">Soft Minimal</h3>
                <div className="right__arrow-icon bg-image"></div>
              </Link>
            </li>
          </ul>
          <Link
            to="/projects"
            className="projects-section__button button button--text"
          >
            <span>Портфоліо</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
