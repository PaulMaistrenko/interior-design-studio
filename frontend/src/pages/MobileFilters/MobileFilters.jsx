export const MobileFilters = () => {
  const [isOpenMobileFilters, setIsMobileFilters] = useState(false);
  return (
    <aside
      className={`mobile-filters ${isOpenMobileFilters ? 'open' : ''}`}
    ></aside>
  );
};
