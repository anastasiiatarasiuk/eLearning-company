import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InstructionalDesign from "./components/InstructionalDesign/InstructionalDesign";
import LearnDesign from "./components/LearnDesign/LearnDesign";
import LiveChat from "./components/LiveChat/LiveChat";
import Navigation from "./components/Navigation/Navigation";
import OurClients from "./components/OurClients/OurClients";
import Services from "./components/Services/Services";
import TalkToUs from "./components/TalkToUs/TalkToUs";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Services />
      <LearnDesign />
      <InstructionalDesign />
      <OurClients />
      <TalkToUs />
      <Footer />
      <LiveChat />
    </>
  );
}

export default App;
