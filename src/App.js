import "./App.css";
import Intro from "./components/header/Intro/Intro";
import Navbar from "./components/header/Navbar/Navbar";
import Services from "./components/services/Services";
import HealthCare from "./components/healthcare providers/HealthCare";
import DownloadApp from "./components/download app/DownloadApp";
import Testimonilas from "./components/testimonials/Testimonilas";
import Footer from "./components/footer/Footer";
import LatestArticle from "./components/latest article/LatestArticle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <HealthCare />
      <DownloadApp />
      {/* <Testimonilas /> */}
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
