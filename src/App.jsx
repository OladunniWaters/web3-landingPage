import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Content from "./components/Content/Content";
import Gallery from "./components/Gallery/Gallery";
import Partner from "./components/Partner/Partner";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Content />
      <Gallery />
      <Partner />
      <Testimonial />
      <Newsletter />
    </div>
  )
}

export default App
