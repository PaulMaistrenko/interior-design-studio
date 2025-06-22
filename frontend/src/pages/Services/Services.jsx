import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { ServicesList } from './components/ServicesList';
import { ServicesSurvey } from './components/ServicesSurvey';

export const Services = () => {
  const currentPage = 'Послуги';

  return (
    <main className="page services-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/services' },
          ]}
        />
      </div>
      <SectionHeader title="Послуги" slogan={`"Краса,що працює на вас"`} />
      <section>
        <ServicesList />
      </section>
      <section className="services-survey-section container">
        <ServicesSurvey />
      </section>
    </main>
  );
};
