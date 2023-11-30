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
          <a className="nav-link active" aria-current="page" href="#">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navigation;
