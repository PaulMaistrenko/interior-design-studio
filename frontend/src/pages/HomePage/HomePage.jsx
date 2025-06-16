import { SectionHeader } from '../../components/ui/SectionHeader';
import { CtaButton } from '../../components/ui/CtaButton';
import styles from './HomePage.module.scss';
import { HomeServiceItem } from './components/HomeServiceItem';
import { homeServicesData } from '../../data/homeServicesData';

export const HomePage = () => {
  return (
    <div className="page">
      <section className={`${styles.heroSection} bg-image`}>
        <p className={styles.heroSectionTitle}>
          МИ СТВОРЮЄМО ІНТЕР’ЄРИ,
          <br /> В ЯКИХ ХОЧЕТЬСЯ ЖИТИ
        </p>
        <CtaButton />
      </section>
      <section className={styles.aboutSection}>
        <SectionHeader title="Про нас" slogan="“Наші корені — наша сила ”" />
        <div className="container">
          <div className={`${styles.aboutTop} grid`}>
            <div className="grid--onDesktop-5-12 h4--bold">
              Tavr Design House — це не просто студія інтер’єру. Це історія,
              вкорінена в землі Таврії — давньої назви нашого рідного Херсона
            </div>
            <div className={`${styles.text} grid--onDesktop-4-8`}>
              У своїй роботі ми поєднуємо архітектурну міцність і візуальну
              виразність. Надихаючись символом таврового профілю —
              конструктивного елементу, що уособлює витривалість і практичність,
              — ми створюємо інтер’єри, які служать роками.
            </div>
            <div
              className={`${styles.aboutPoster1} grid--onDesktop-1-3 bg-image`}
            ></div>
            <div
              className={`${styles.aboutPoster2} grid--onDesktop-9-12 bg-image`}
            ></div>
          </div>
          <div className={`${styles.aboutBottom} grid`}>
            <h4 className={`${styles.aboutTitle} h4--regular`}>Цінності</h4>
            <article className={`${styles.aboutArticle} grid--onDesktop-5-8`}>
              <h3 className={`${styles.articleTitle} h3--semibold`}>
                Емоційність
              </h3>
              <p className={`${styles.articleText}`}>
                Ми створюємо інтер’єри, які викликають щирі емоції, надихають та
                дарують відчуття спокою. Для нас важливо, щоб простір не просто
                виглядав гарно, а мав душу й атмосферу, у якій хочеться жити.
              </p>
            </article>
            <article className={`${styles.aboutArticle} grid--onDesktop-9-12`}>
              <h3 className={`${styles.articleTitle} h3--semibold`}>
                Індивідуальність
              </h3>
              <p className={`${styles.articleText}`}>
                Кожен наш проєкт — це унікальне поєднання естетики,
                функціональності та стилю, що відображає характер і потреби
                клієнта. Ми не працюємо за шаблонами — ми втілюємо саме вашу
                історію в інтер’єрі.
              </p>
            </article>
            <article className={`${styles.aboutArticle} grid--onDesktop-5-8`}>
              <h3 className={`${styles.articleTitle} h3--semibold`}>
                Комфорт і гармонія
              </h3>
              <p className={`${styles.articleText}`}>
                Ми віримо, що інтер’єр — це не набір меблів і кольорів. Це —
                відчуття. Відчуття комфорту, тепла, гармонії. Простір має бути
                продовженням внутрішнього світу людини.
              </p>
            </article>
            <article className={`${styles.aboutArticle} grid--onDesktop-9-12`}>
              <h3 className={`${styles.articleTitle} h3--semibold`}>
                Якість і надійність
              </h3>
              <p className={`${styles.articleText}`}>
                Усе, що ми робимо, — продумано до деталей. Від вибору матеріалів
                до фінального штриха — ми прагнемо до бездоганного результату,
                який не втрачає актуальності з часом.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className={styles.servicesSection}>
        <SectionHeader
          title="Послуги"
          slogan="“Перший крок до інтер’єру мрії”"
        />
        <div className="container">
          <ul className={styles.homeServicesList}>
            {homeServicesData.map((service) => (
              <HomeServiceItem key={service.id} service={service} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
