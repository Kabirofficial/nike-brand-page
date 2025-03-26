import './App.css';
import logo from './assets/nikelogo.svg';
import shoe from './assets/nikeshoes.png';
import amazon from './assets/amazon.svg';
import flipkart from './assets/flipkart.svg';

function App() {
  return (
    <div>
      <nav className="navbar">
        <img className="logo" src={logo} alt="Nike Logo" />

        <ul className="nav-links">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>Elevate Your Style with Comfort</h1>
          <p>
            Our exclusive Nike collection brings you the perfect blend of fashion and functionality.
          </p>
          <div className="buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="category-btn">Category</button>
          </div>

          <p className="available-on">Also Available On</p>
          <div className="platforms">
            <img src={flipkart} alt="Flipkart" />
            <img src={amazon} alt="Amazon" />
          </div>
        </div>

        <div className="hero-image">
          <img src={shoe} alt="Nike Shoe" />
        </div>
      </header>
    </div>
  );
}

export default App;
