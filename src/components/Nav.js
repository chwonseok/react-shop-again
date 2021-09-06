/* eslint-disable */
import './nav.css';

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <a href="#">
          <h1>WS</h1>
        </a>
        <a href="#">search</a>
        <a href="#">items</a>
        <a href="#">cart</a>
      </div>
      <a className="nav-right" href="#">
        =
      </a>
    </nav>
  );
}

export default Nav;
