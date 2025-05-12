import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../ServiceItem/ServiceItem';

export const ServiceList = () => {
  return (
    <ul className="services__list">
      {servicesData.map((item) => (
        <ServiceItem key={item.id} service={item} />
      ))}
    </ul>
  );
};
