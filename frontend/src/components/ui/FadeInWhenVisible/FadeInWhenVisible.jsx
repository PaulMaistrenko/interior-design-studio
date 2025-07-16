import { useAnimation, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const FadeInWhenVisible = ({
  children,
  direction = 'up',
  threshold = 0.2,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 150 : direction === 'down' ? -150 : 0,
      x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

FadeInWhenVisible.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  threshold: PropTypes.number,
};
