import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import HireMe from "./components/HireMe";
import Achievements from "./components/Achievements";
import CardModal from "./components/CardModal";

const App = () => {
  return (
    <BrowserRouter>
      
      <div className="relative z-0 bg-primary test">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* <div className="relative z-0"> <Hero /><StarsCanvas/></div> */}
        </div>

        <About />
        <Experience />
        {/* <Tech /> */}
        <CardModal />
        <Works />
        <Achievements />
        {/* <Feedbacks /> */}
        <HireMe />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
