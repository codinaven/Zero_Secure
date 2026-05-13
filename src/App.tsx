import { Header } from "./landingPage/Header";
import { Hero } from "./landingPage/Hero";
import { Middle } from "./components/Middle";
import { Intros } from "./landingPage/IntroCard";
import "./App.css";
import { Pricing } from "./components/Pricing";
import { Footer } from "./landingPage/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Middle />
      <Pricing />
      <Intros />
      <Footer />
    </div>
  );
}

export default App;
