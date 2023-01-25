import './Partner.scss'
import partnerLogo1 from "../../assets/logos_apple-app-store.png";
import partnerLogo2 from "../../assets/logos_apiary.png";
import partnerLogo3 from "../../assets/logos_android-icon.png";
import partnerLogo4 from "../../assets/logos_basecamp.png";
import partnerLogo5 from "../../assets/logos_airbnb.png";
import partnerLogo6 from "../../assets/logos_ibm.png";

function Partner() {

  return (
    <div className="container Partner">
        <div className="partner-row">
            <div className="partner-col1">
                <h2 className="partner-h2">Partners</h2>
                <p className="partner-p">We focus on ergonomics and meeting you where you work. I'ts only a keystroke away.</p>
            </div>
            
            <div className="partner-col2">
                 <img className="partner-logo1" src={partnerLogo1} alt="partnerLogo1"/>
                 <img className="partner-logo2" src={partnerLogo2} alt="partnerLogo2"/>
                 <img className="partner-logo3" src={partnerLogo3} alt="partnerLogo3"/>
                 <img className="partner-logo4" src={partnerLogo4} alt="partnerLogo4"/>
                 <img className="partner-logo5" src={partnerLogo5} alt="partnerLogo5"/>
                 <img className="partner-logo6" src={partnerLogo6} alt="partnerLogo6"/>                
            </div>
            <button className="partner-btn">All Partners</button>
            </div>
    </div>
  )
}

export default Partner