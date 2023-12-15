import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
<nav className="test navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span>Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">About Me </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Resume">Resume</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navigation;
