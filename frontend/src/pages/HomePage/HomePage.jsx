import { CtaButton } from '../../components/ui/CtaButton';
import styles from './HomePage.module.scss';

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
    </div>
  );
};
