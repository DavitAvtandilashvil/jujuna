import AboutUs from "../components/AboutUs";
import Bottle from "../components/Bottle";
import Cocktails from "../components/Cocktails";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MobileBar from "../components/MobileBar";
import News from "../components/News";

function Home() {
  return (
    <div className="bg-[#eaeaea] dark:bg-[#000]">
      <Header />
      <HeroSection />
      <AboutUs />
      <News />
      <Bottle />
      <Cocktails />
      <MobileBar />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
