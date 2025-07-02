import { useMainContext } from '../../context';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { CtaButtonPrimary } from '../../components/ui/CtaButtonPrimary';
import { CtaButtonSecondary } from '../../components/ui/CtaButtonSecondary';
import { HomeServiceItem } from './components/HomeServiceItem';
import { homeServicesData } from '../../data/homeServicesData';
import { ProjectCard } from '../../components/ui/ProjectCard';

export const HomePage = () => {
  const { projects } = useMainContext();
  const [shownProjects, setShownProjects] = useState([]);
  const [fadeState, setFadeState] = useState([false, false]); // fade out/in flags for each slide
  const fadeDuration = 1000; // 1 second
  const intervalDuration = 4000; // 4 seconds
  const nextIndexRef = useRef(0);

  useEffect(() => {
    if (!projects || projects.length < 2) return;

    const initial = getInitialProjects(projects);
    setShownProjects(initial);
    nextIndexRef.current = 2 % projects.length;

    const toggleFade = (slideIdx) => {
      // Start fade out
      setFadeState((prev) => {
        const newState = [...prev];
        newState[slideIdx] = true;
        return newState;
      });

      setTimeout(() => {
        // Change project after fade out
        setShownProjects((prev) => {
          const newProjects = [...prev];
          newProjects[slideIdx] = getNextProject(
            projects,
            newProjects.map((p) => p.id)
          );
          return newProjects;
        });
        // Start fade in
        setFadeState((prev) => {
          const newState = [...prev];
          newState[slideIdx] = false;
          return newState;
        });
      }, fadeDuration);
    };

    let slideToChange = 0;

    const intervalId = setInterval(() => {
      toggleFade(slideToChange);
      slideToChange = slideToChange === 0 ? 1 : 0; // alternate slides
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [projects]);

  return (
    <main className="page home-page">
      <section className="home__hero-section bg-image">
        <p className="home__hero-section-title">
          МИ СТВОРЮЄМО ІНТЕР’ЄРИ,
          <br /> В ЯКИХ ХОЧЕТЬСЯ ЖИТИ
        </p>
        <CtaButtonPrimary title={`Зв'язатися з нами`} link="/contact" />
      </section>

      <section className="home__about-section">
        <SectionHeader title="Про нас" slogan="“Наші корені — наша сила ”" />
        <div className="container">{/* Твой контент секции "Про нас" */}</div>
      </section>

      <section className="home__services-section">
        <SectionHeader
          title="Послуги"
          slogan="“Перший крок до інтер’єру мрії”"
        />
        <div className="container">
          <ul className="home__services-list">
            {homeServicesData.map((service) => (
              <HomeServiceItem key={service.id} service={service} />
            ))}
          </ul>
          <div className="centered-block">
            <CtaButtonSecondary
              title="Всі послуги"
              link="/services"
              type="with-arrow"
              size="small"
            />
          </div>
        </div>
      </section>

      <section className="home__projects-section">
        <SectionHeader title="Проєкти" slogan="“Інтер’єр, що живе з вами”" />
        <div className="container">
          <ul
            className="home__projects-list"
            style={{ display: 'flex', gap: '1rem' }}
          >
            {shownProjects.map((project, idx) => (
              <motion.li
                key={project.id}
                className="projects-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeState[idx] ? 0 : 1 }}
                transition={{
                  duration: fadeDuration / 1000,
                  ease: 'easeInOut',
                }}
                style={{ listStyle: 'none', flex: '1 1 45%' }}
              >
                <ProjectCard project={project} parentName="Головна" />
              </motion.li>
            ))}
          </ul>
          <div className="centered-block">
            <CtaButtonSecondary
              title="Портфоліо"
              link="/projects"
              type="with-arrow"
              size="small"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

function getInitialProjects(projects) {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

function getNextProject(projects, excludeIds = []) {
  const candidates = projects.filter((p) => !excludeIds.includes(p.id));
  if (candidates.length === 0) return projects[0];
  const randomIndex = Math.floor(Math.random() * candidates.length);
  return candidates[randomIndex];
}
