import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { ServicesList } from './components/ServicesList';

export const Services = () => {
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
      </div>
      <SectionHeader title="Послуги" slogan={`"Краса,що працює на вас"`} />
      <ServicesList />
    </div>
  );
};
