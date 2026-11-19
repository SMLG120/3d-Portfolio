import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hackathons, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <main id='main'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Hackathons />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
