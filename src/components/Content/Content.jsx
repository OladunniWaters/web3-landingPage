import './Content.scss';
import macBook from "../../assets/Macbook Pro.png";
import BoardNotification from "../../assets/Boards Notifications.png";

function Content() {

  return (
    <div className="container Content">
       <div className="content-row">
           <div className="content-col1">
              <h2 className="content-h2">Contents</h2>
              <p className="content-p">We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
           </div>
           
           <div className="content-col2">
             <div className="content-col2-card">
               <div className="content-card-item1">
                   <h3 className="content-item1-h3">Work</h3>
                   <p className="content-item1-p">
                      Ever wondered if you're too reliant on a client for work? Slate helps you identify .
                   </p>
                   <button className="content-item1-btn">
                       Sign Up
                   </button>
               </div>
               <div>
                 <img className="content-card-image1" src={macBook} alt="mac-book"/>
               </div>
             </div>
             
             <div className="content-col2-card">
               <div className="content-card-item2">
                   <h3 className="content-item2-h3">Design with real data</h3>
                   <p className="content-item1-p">Ever wondered if you're too reliant on a client for work? Slate helps you identify .
                   </p>
                   <button className="content-item2-btn">
                     Try For Free
                   </button>
               </div>
               <div>
                  <img className="content-card-image2" src={BoardNotification} alt="mac-book"/>
               </div>
             </div>
           </div>
       </div>
    </div>
  )
}

export default Content