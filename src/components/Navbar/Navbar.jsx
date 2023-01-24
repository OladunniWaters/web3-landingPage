import './Navbar.scss'
import logo from "../../assets/Rectangle 4.png"


function Navbar() {

  return (
    <div className="Navbar">
     <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
             <img src={logo} alt="logo" className="nav-logo"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link"  href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#"> Contact</a>
              </li>
            </ul>
                <button class="btn" href="#">Login</button>
          </div>
        </div>
      </nav> 
    </div>
  )
}

export default Navbar