import { createContext, useState, useContext, useEffect } from 'react';
import { getProjectsList } from '../utils/api';
import PropTypes from 'prop-types';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjectsList();
        setProjects(data);
      } catch (err) {
        console.error('Помилка завантаження проектів:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <MainContext.Provider
      value={{
        projects,
        loading,
        error,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
};
