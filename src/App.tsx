import "./App.scss";
import IntroIMG from "./assets/Contribo Images Branding/Contribo qirvex fill-no.svg";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import { Footer } from "./components/footer-comp/Footer";

function App() {
  return (
    <div className="main">
      <div className="intro-cont"></div>
      <img className="logo" src={IntroIMG} alt="Contribo Intro" />
      <UseAnimations
        className="loading"
        animation={infinity}
        size={140}
        fillColor="#34495e"
      />
      <h3 className="intro">We’re cooking up something amazing! </h3>
      <button className="button-86"><a href="https://qirvex.dev">See More On Qirvex™</a></button>
      <Footer />
    </div>
  );
}

export default App;
