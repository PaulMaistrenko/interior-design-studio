import { Breadcrumb } from '../../components/UI/Breadcrumb';
import { SectionTop } from '../../components/UI/SectionTop';
import { ServiceList } from '../../components/ServiceList';

export const ServicesPage = () => {
  const currentPage = 'Послуги';
  return (
    <div className="page services-page">
      <div className="container">
        <Breadcrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/services' },
          ]}
        />
        <SectionTop title="Послуги" tagline="“Краса,що працює на вас”" />
        <section className="services-page__content">
          <ServiceList />
        </section>
      </div>
    </div>
  );
};
