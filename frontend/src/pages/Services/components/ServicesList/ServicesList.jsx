import { servicesData } from '../../../../data/servicesData';
import { ServicesItem } from '../ServicesItem';
import PropTypes from 'prop-types';

export const ServicesList = ({ onScrollToSurvey }) => {
  return (
    <ul className="services__list">
      {servicesData.map((service) => (
        <ServicesItem
          key={service.id}
          service={service}
          onScrollToSurvey={onScrollToSurvey}
        />
      ))}
    </ul>
  );
};

ServicesList.propTypes = {
  onScrollToSurvey: PropTypes.func.isRequired,
};
