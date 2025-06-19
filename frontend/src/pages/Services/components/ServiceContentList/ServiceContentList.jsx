import PropTypes from 'prop-types';
import { ServiceContentItem } from '../ServiceContetnItem';

export const ServiceContentList = ({ contentNote, serviceContent }) => {
  return (
    <div className="grid-wrapper grid--onDesktop-8-12">
      <p className="content-note">{contentNote}</p>
      <ul className="service-content__list">
        {serviceContent.map((item, index) => (
          <ServiceContentItem key={index} content={item} />
        ))}
      </ul>
    </div>
  );
};

ServiceContentList.propTypes = {
  contentNote: PropTypes.string,
  serviceContent: PropTypes.arrayOf(PropTypes.string).isRequired,
};
