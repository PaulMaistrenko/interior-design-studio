import imageMinimalism from '../../../assets/images/blog/blog-card-section/section-1.png';

export const BlogCardSection = () => {
  return (
    <article className="blog-card__section">
      <h2 className="section__title h2--medium">1. Мінімалізм</h2>
      <p className="section__description">
        Мінімалізм в інтер&#39;єрі — це філософія вільного простору, де кожна
        річ має сенс і своє місце. Цей стиль спирається на принцип &quot;менше —
        краще&quot;, відмовляється від надмірностей, зосереджуючись на
        функціональності та гармонії. Мінімалістичний інтер&#39;єр виглядає
        свіжо, акуратно й ідеально підходить для тих, хто цінує порядок, спокій
        та сучасну естетику. Колірна гамма: білий, сірий, бежевий, чорний,
        пастельні акценти
      </p>
      <div className="section__details">
        <div className="section__advantages">
          <p className="advantages__title text-main--extrabold">Переваги:</p>
          <ul className="advantages__list">
            <li className="advantages__item">Візуально розширює простір</li>
            <li className="advantages__item">
              Підходить для квартир будь-якого розміру
            </li>
            <li className="advantages__item">
              Знижує рівень візуального та ментального шуму
            </li>
            <li className="advantages__item">
              Чудово поєднується з технологіями smart home
            </li>
          </ul>
        </div>
        <div className="section__features">
          <p className="features__title text-main--extrabold">Ocoбливості:</p>
          <ul className="features__list">
            <li className="features__item">Простота форм</li>
            <li className="features__item">Максимум світла та мінімум речей</li>
            <li className="features__item">
              Чисті лінії та приховані системи зберігання
            </li>
            <li className="features__item">
              Гнучкість у поєднанні з іншими стилями
            </li>
          </ul>
        </div>
      </div>
      <img src={imageMinimalism} alt="minimalism" className="section__image" />
    </article>
  );
};
