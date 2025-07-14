import { getProjectConfigurations } from '../../../../utils/api';
import { useMainContext } from '../../../../context/MainContext';
import { ServicesItem } from '../ServicesItem';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const ServicesList = ({ onScrollToSurvey }) => {
  const [projectConfigurations, setProjectConfigurations] = useState([]);
  const { setLoading, setError } = useMainContext();

  useEffect(() => {
    const loadConfigurations = async () => {
      try {
        const data = await getProjectConfigurations();
        setProjectConfigurations(data.results);
      } catch (err) {
        setError(err.message);
        console.error('Помилка завантаження:', err);
      } finally {
        setLoading(false);
      }
    };
    loadConfigurations();
  }, []);

  return (
    <ul className="services__list">
      {projectConfigurations.map((configuration) => (
        <ServicesItem
          key={configuration.id}
          configuration={configuration}
          onScrollToSurvey={onScrollToSurvey}
        />
      ))}
    </ul>
  );
};

ServicesList.propTypes = {
  onScrollToSurvey: PropTypes.func.isRequired,
};
