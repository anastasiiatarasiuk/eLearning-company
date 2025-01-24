import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InstructionalDesign from "./components/InstructionalDesign/InstructionalDesign";
import LearnDesign from "./components/LearnDesign/LearnDesign";
import Navigation from "./components/Navigation/Navigation";
import OurClients from "./components/OurClients/OurClients";
import TalkToUs from "./components/TalkToUs/TalkToUs";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <LearnDesign />
      <InstructionalDesign />
      <OurClients />
      <TalkToUs />
      <Footer />
    </>
  );
}

export default App;
