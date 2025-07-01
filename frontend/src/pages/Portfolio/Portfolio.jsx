import { SectionHeader } from '../../components/ui/SectionHeader';
import { BreadCrumb } from '../../components/ui/BreadCrumb';
import { Filters } from './components/Filters';

export const Portfolio = () => {
  const currentPage = 'Портфоліо';

  return (
    <div className="page portfolio-page">
      <div className="container">
        <BreadCrumb
          items={[
            { title: 'Головна', href: '/' },
            { title: currentPage, href: '/portfolio' },
          ]}
        />
      </div>
      <SectionHeader title="Портфоліо" slogan={`"Дім - це більше,ніж стіни"`} />
      <div className="container">
        <Filters />
      </div>
    </div>
  );
};
