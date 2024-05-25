import './App.css';

import AboutUs from './components/AboutUs';
import ContactusSection from './components/ContactusSection';
import Footer from './components/Footer';
import LivingRoomSection from './components/LivingRoomSection';
import Navbar from './components/Navbar';
import OurVision from './components/OurVision';
import VideoSection from './components/VideoSection';
import WhyChooseusSection from './components/WhyChooseusSection';

function App() {
  return (
    <>
      <div className="container mx-auto max-w-[85rem]">
        <Navbar />
        <LivingRoomSection />
        <AboutUs />
        <VideoSection />
        <OurVision />
      </div>
      <ContactusSection />
      <div className="mx-auto max-w-[85rem]"><WhyChooseusSection /></div>

      <Footer />
    </>
  );
}

export default App;
