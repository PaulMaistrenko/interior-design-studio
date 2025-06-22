import { SectionHeader } from '../../components/ui/SectionHeader';
import { CtaButtonPrimary } from '../../components/ui/CtaButtonPrimary';
import { CtaButtonSecondary } from '../../components/ui/CtaButtonSecondary';
import { HomeServiceItem } from './components/HomeServiceItem';
import { homeServicesData } from '../../data/homeServicesData';
import { ProjectCard } from '../../components/ui/ProjectCard';

export const HomePage = () => {
  return (
    <main className="page home-page">
      <section className="home__hero-section bg-image">
        <p className="home__hero-section-title">
          МИ СТВОРЮЄМО ІНТЕР’ЄРИ,
          <br /> В ЯКИХ ХОЧЕТЬСЯ ЖИТИ
        </p>
        <CtaButtonPrimary title={`Зв'язатися з нами`} link="/contact" />
      </section>
      <section className="home__about-section">
        <SectionHeader title="Про нас" slogan="“Наші корені — наша сила ”" />
        <div className="container">
          <div className="about-section__top grid">
            <div className="grid--onDesktop-5-12 h4--bold">
              Tavr Design House — це не просто студія інтер’єру. Це історія,
              вкорінена в землі Таврії — давньої назви нашого рідного Херсона
            </div>
            <div className="about-section__text grid--onDesktop-4-8">
              У своїй роботі ми поєднуємо архітектурну міцність і візуальну
              виразність. Надихаючись символом таврового профілю —
              конструктивного елементу, що уособлює витривалість і практичність,
              — ми створюємо інтер’єри, які служать роками.
            </div>
            <div className="about-poster-1 grid--onDesktop-1-3 bg-image"></div>
            <div className="about-poster-2 grid--onDesktop-9-12 bg-image"></div>
          </div>
          <div className="about-section__bottom grid">
            <h4 className="about-section__title h4--regular">Цінності</h4>
            <article className="about-section__article grid--onDesktop-5-8">
              <h3 className="article__title h3--semibold">Емоційність</h3>
              <p className="article__text">
                Ми створюємо інтер’єри, які викликають щирі емоції, надихають та
                дарують відчуття спокою. Для нас важливо, щоб простір не просто
                виглядав гарно, а мав душу й атмосферу, у якій хочеться жити.
              </p>
            </article>
            <article className="about-section__article grid--onDesktop-9-12">
              <h3 className="article__title h3--semibold">Індивідуальність</h3>
              <p className="article__text">
                Кожен наш проєкт — це унікальне поєднання естетики,
                функціональності та стилю, що відображає характер і потреби
                клієнта. Ми не працюємо за шаблонами — ми втілюємо саме вашу
                історію в інтер’єрі.
              </p>
            </article>
            <article className="about-section__article grid--onDesktop-5-8">
              <h3 className="article__title h3--semibold">
                Комфорт і гармонія
              </h3>
              <p className="article__text">
                Ми віримо, що інтер’єр — це не набір меблів і кольорів. Це —
                відчуття. Відчуття комфорту, тепла, гармонії. Простір має бути
                продовженням внутрішнього світу людини.
              </p>
            </article>
            <article className="about-section__article grid--onDesktop-9-12">
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
      <section className="home__services-section">
        <SectionHeader
          title="Послуги"
          slogan="“Перший крок до інтер’єру мрії”"
        />
        <div className="container">
          <ul className="home__services-list">
            {homeServicesData.map((service) => (
              <HomeServiceItem key={service.id} service={service} />
            ))}
          </ul>
          <div className="centered-block">
            <CtaButtonSecondary
              title="Всі послуги"
              link="/services"
              type="with-arrow"
              size="small"
            />
          </div>
        </div>
      </section>
      <section className="home__projects-section">
        <SectionHeader title="Проєкти" slogan="“Інтер’єр, що живе з вами”" />
        <div className="container">
          <ul className="home__projects-list">
            <li className="projects-item">
              <ProjectCard title="Natural Flow" />
            </li>
            <li className="projects-item">
              <ProjectCard title="Soft Minimal" />
            </li>
          </ul>
          <div className="centered-block">
            <CtaButtonSecondary
              title="Портфоліо"
              link="/projects"
              type="with-arrow"
              size="small"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
