import './App.css';

import AboutUs from './components/AboutUs';
import LivingRoomSection from './components/LivingRoomSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container mx-auto max-w-[85rem]">
      <Navbar />
      <LivingRoomSection />
      <AboutUs />
    </div>
  );
}

export default App;
