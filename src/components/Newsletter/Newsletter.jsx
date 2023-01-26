import './Newsletter.scss';
import newsletterImage from "../../assets/Line Chart 1.png";

function Newsletter() {

  return (
    <div className="container Newsletter">
        <div className="newsletter-row">
           <div className="newsletter-col1">
              <h2 className="newsletter-h2">OpenType feature and Variable fonts</h2>
              <button className="newsletter-btn">Try For Free</button>
           </div>
           
           <div className="newsletter-col2">
             <img className="newsletter-image" src={newsletterImage} alt="newsletter"/>
           </div>
        </div>
  </div>
  )
}

export default Newsletter