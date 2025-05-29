import { BreadCrumb } from '../../../components/UI/BreadCrumb';
import { SectionTop } from '../../../components/UI/SectionTop';
import { ServiceList } from '../ServiceList/ServiceList';
import { ServicesCta } from '../ServicesCta/ServicesCta';

export const ServicesPage = () => {
  const currentPage = 'Послуги';
  return (
    <div className="page services-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/services' },
          ]}
        />
        <SectionTop title="Послуги" tagline="“Краса,що працює на вас”" />
      </div>
      <section className="services-page__content">
        <ServiceList />
      </section>
      <div className="container">
        <ServicesCta />
      </div>
    </div>
  );
};
