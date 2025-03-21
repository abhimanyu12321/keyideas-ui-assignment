import HeroSection from "../components/HeroSection";
import CollectionSection from "../components/CollectionSection";
import LooseDiamondsSection from "../components/LooseDiamondsSection";
import KeepInTouchSection from "../components/KeepInTouchSection";
import FooterSection from "../components/FooterSection";
import "../App.css";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <HeroSection />
        <CollectionSection />
        <LooseDiamondsSection />
        <KeepInTouchSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default HomePage;
