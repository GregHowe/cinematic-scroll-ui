import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticlesTest = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: { value: '#000000' } },
        particles: {
          number: { value: 80 },
          color: { value: '#ffffff' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: '#ffffff', opacity: 0.3 },
        },
      }}
    />
  );
};

export default ParticlesTest;
