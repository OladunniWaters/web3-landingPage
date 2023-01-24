import './Hero.scss'
import heroImage from "../../assets/screens.png"

function Hero() {

  return (
    <div class="Hero">
        <div class="hero-col-1">
           <h1 class="hero-h1">Work at the speed of thought</h1>
           <p class="hero-p">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
           <div class="hero-btn-cont">
              <button class="hero-btn1">Try For Free</button>
              <button class="hero-btn2">Learn More</button>
           </div>
        </div>
        
        <div class="col">
          <img src={heroImage} alt="hero" class="hero-image"/>
        </div>
   </div>
  )
}

export default Hero