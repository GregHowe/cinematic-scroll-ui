// ParticlesBackground.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-global"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 }, // ⬅️ SIEMPRE visible en fondo
        detectRetina: true,
        particles: {
          number: { value: 160, density: { enable: true, area: 1200 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.35 },
          size: { value: 2.1 },
          move: { enable: true, speed: 1.15 },
          twinkle: { particles: { enable: true, frequency: 0.23, opacity: 1 } }
        }
      }}
      style={{
        position: "fixed", // ⬅️ Esto es LO QUE FALTABA
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // ⬅️ No bloquea clics
      }}
    />
  );
};

export default ParticlesBackground;
