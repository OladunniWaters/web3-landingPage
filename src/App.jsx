import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Content from "./components/Content/Content";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <Content />
    </div>
  )
}

export default App
