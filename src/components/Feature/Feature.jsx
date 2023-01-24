import { FaUtensils } from 'react-icons/fa';
import { RiAliensLine } from 'react-icons/ri';
import { CgInfinity } from 'react-icons/cg';
import './Feature.scss'


function Feature() {

  return (
    <div className="container Feature">
       <div className="feature-cont1">
          <h2 className="feature-h2">FEATURES</h2>
          <p className="feature-p">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
       </div>
       
       <div className="feature-cont2">
         <div className="feature-image"></div>
         
         <div className="feature-cont2-2">
            <div className="feature-cont2-card">
               <div className="feature-cardItem-1">
                 <FaUtensils className="feature-cardItem-i"/>
                 <p className="feature-cardItem-p">A single source of truth</p>
               </div>
               <p className="feature-card-p">
                  When you add work to your Slate calendar we automatically calculate useful insights 
               </p>
            </div>
            
            <div className="feature-cont2-card">
               <div className="feature-cardItem-2">
                 <RiAliensLine className="feature-cardItem-i"/>
                 <p className="feature-cardItem-p">Intuitive interface</p>
               </div>
               <p className="feature-card-p">
                  When you add work to your Slate calendar we automatically calculate useful insights 
               </p>
            </div>
            
            <div className="feature-cont2-card">
               <div className="feature-cardItem-3">
                  <CgInfinity className="feature-cardItem-i"/>
                  <p className="feature-cardItem-p">Or with rules</p>
               </div>
               <p className="feature-card-p">
                  When you add work to your Slate calendar we automatically calculate useful insights 
               </p>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Feature