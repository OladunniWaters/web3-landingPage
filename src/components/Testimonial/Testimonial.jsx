import './Testimonial.scss';
import testimonialImage1 from "../../assets/Ellipse 2.png";
import testimonialImage2 from "../../assets/Ellipse 2.png";
import testimonialImage3 from "../../assets/Ellipse 2.png";
import testimonialImage4 from "../../assets/Ellipse 2.png";


function Testimonial() {

  return (
    <div className="container Testimonial">
        <div className="testimonial-row">
           <div className="testimonial-col1">
              <h2 className="testimonial-h2">Testimonials</h2>
           </div>
           
           <div className="testimonial-col2">
             <div className="testimonial-card">
                <div className="testimonial-item">
                  <img src={testimonialImage1} alt="testimonial-image" className="testimonial-item-image"/>
                  <p className="testimonial-item-p">Claire Bell</p>
                  <p className="testimonial-item-p">Designer</p>
                </div>
                <div>
                   <p className="testimonial-p">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                   </p>
                </div>
             </div>
             
             <div className="testimonial-card">
                <div className="testimonial-item">
                  <img src={testimonialImage2} alt="testimonial-image" className="testimonial-item-image"/>
                  <p className="testimonial-item-p">Francisco Lane</p>
                   <p className="testimonial-item-p">Designer</p>                  
                </div>
                <div>
                   <p className="testimonial-p">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                   </p>
                </div>
             </div>
             
             <div className="testimonial-card">
                <div className="testimonial-item">
                  <img src={testimonialImage3} alt="testimonial-image" className="testimonial-item-image"/>
                  <p className="testimonial-item-p">Ralph Fisher</p>
                  <p className="testimonial-item-p">Designer</p>
                </div>
                <div>
                   <p className="testimonial-p">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                   </p>
                </div>
             </div>
             
             <div className="testimonial-card">
                <div className="testimonial-item">
                  <img src={testimonialImage4} alt="testimonial-image" className="testimonial-item-image"/>
                  <p className="testimonial-item-p">Jorge Murphy</p>
                  <p className="testimonial-item-p">Designer</p>
                </div>
                <div>
                   <p className="testimonial-p">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                   </p>
                </div>
             </div>
           </div>
        </div> 
    </div>
  )
}

export default Testimonial