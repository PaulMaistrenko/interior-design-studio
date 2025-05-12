import PropTypes from 'prop-types';
import { ServiceContentItem } from '../ServiceContentItem/ServiceContentItem';

export const ServiceContentList = ({ contentNote, serviceContent }) => {
  return (
    <>
      <p className="content-note">{contentNote}</p>
      <ul className="service-content__list">
        {serviceContent.map((item, index) => (
          <ServiceContentItem key={index} content={item} />
        ))}
      </ul>
    </>
  );
};

ServiceContentList.propTypes = {
  contentNote: PropTypes.string,
  serviceContent: PropTypes.arrayOf(PropTypes.string).isRequired,
};
