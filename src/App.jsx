import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import OverlayScene from './components/OverlayScene';
import TransitionLayer from './components/TransitionLayer';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
           <OverlayScene />
          <TransitionLayer />
          <HeroSection />
          <SecondSection />
          <ThirdSection />
        </div>
  )
}

export default App
