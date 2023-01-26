import './Gallery.scss';

import galleryImage1 from "../../assets/Rectangle 1 (3).png";
import galleryImage2 from "../../assets/Rectangle 1 (3).png";
import galleryImage3 from "../../assets/Rectangle 1 (3).png";
import galleryImage4 from "../../assets/Rectangle 1 (3).png";
import galleryImage5 from "../../assets/Rectangle 1 (3).png";
import galleryImage6 from "../../assets/Rectangle 1 (3).png";
import galleryImage7 from "../../assets/Rectangle 1 (3).png";
import galleryImage8 from "../../assets/Rectangle 1 (3).png";

function Gallery() {

  return (
    <div className="container Gallery">
        <div className="gallery-row">
          <div className="gallery-col1">
             <h2 className="gallery-h2">Gallery</h2>
             <p className="gallery-p">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
          </div>
          
          <div className="gallery-col2">
            <div>
               <img className="gallery-image" src={galleryImage1} alt="gallery"/>
             </div>
             
             <div>
               <img className="gallery-image" src={galleryImage2} alt="gallery"/>
              </div>
              
              <div>
                <img className="gallery-image" src={galleryImage3} alt="gallery"/>
              </div>
              
              <div>
               <img className="gallery-image" src={galleryImage4} alt="gallery"/>
               </div>
               
               <div>
                 <img className="gallery-image" src={galleryImage5} alt="gallery"/>
               </div>
               
               <div>
                <img className="gallery-image" src={galleryImage6} alt="gallery"/>
                </div>
                
                <div>
                 <img className="gallery-image" src={galleryImage7} alt="gallery"/>
                 </div>
                 
                <div>
                 <img className="gallery-image" src={galleryImage8} alt="gallery"/>
                 </div>
          </div>
          <button className="gallery-btn">See more</button>
       </div>   
    </div>
  )
}

export default Gallery