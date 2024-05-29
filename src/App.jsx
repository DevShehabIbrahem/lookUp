import './App.css';

import AboutUs from './components/AboutUs';
import ContactusSection from './components/ContactusSection';
import Footer from './components/Footer';
import LivingRoomSection from './components/LivingRoomSection';
import Navbar from './components/Navbar';
import OurVision from './components/OurVision';
import VideoSection from './components/VideoSection';
import WhyChooseusSection from './components/WhyChooseusSection';
import Layout from './components/responsiveLayout/Layout';

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <LivingRoomSection />
        <AboutUs />
      </Layout>
      <VideoSection />
      <Layout>
        <OurVision />
      </Layout>
      <ContactusSection />
      <Layout>
        <WhyChooseusSection />
      </Layout>

      <Footer />
    </>
  );
}

export default App;
