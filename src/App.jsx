import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import HireMe from "./components/HireMe";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
       <Navbar/>
       <Hero/>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Achievements/>
        {/* <Feedbacks /> */}
        <HireMe/>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;