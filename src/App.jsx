import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, AdditionalExperience, Education, Hero, Navbar, Tech, Works, Resume, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education/>
        <Experience />
        <AdditionalExperience/>
        <Tech />
        <Works />
        <Resume/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
