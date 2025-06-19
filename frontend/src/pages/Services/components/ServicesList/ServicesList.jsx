import { servicesData } from '../../../../data/servicesData';
import { ServicesItem } from '../ServicesItem';

export const ServicesList = () => {
  return (
    <ul className="services__list">
      {servicesData.map((service) => (
        <ServicesItem key={service.id} service={service} />
      ))}
    </ul>
  );
};
