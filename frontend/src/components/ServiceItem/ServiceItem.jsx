import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ServiceContentList } from '../ServiceContentList';

export const ServiceItem = ({ service }) => {
  const { title, href, price, minPrice, contentNote, serviceContent } = service;

  return (
    <li className="services__item">
      <article className="service">
        <div className="service__top">
          <h2 className="service__title">{title}</h2>
          <Link
            to={href}
            className="service-price__button"
            aria-label="Розрахувати вартість"
          >
            Розрахувати вартість
          </Link>
        </div>
        <div className="service-content">
          <div className="service-price">
            <p className="service-price__title">Вартість:</p>
            <p className="service-price__value">{`$${price.value}/ м²`}</p>
          </div>
          <div className="service-min-price">
            <p className="service-min-price__title">*мінімальна вартість:</p>
            <p className="service-min-price__value">{`$${minPrice.value}`}</p>
          </div>
          <ServiceContentList
            contentNote={contentNote}
            serviceContent={serviceContent}
          />
        </div>
      </article>
    </li>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      unit: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired,
    minPrice: PropTypes.shape({
      value: PropTypes.number,
      currency: PropTypes.string,
    }),
    contentNote: PropTypes.string,
    serviceContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
