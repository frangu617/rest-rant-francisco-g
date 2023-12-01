const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        
        <title>Rest-Rant</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav className="navbar sticky-top navbar-expand-sm navbar-primary bg-primary">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">REST-Rant</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <h3>REST-Rant</h3>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/places">
                  <h3>Places</h3>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/places/new">
                  <h3>Add Place</h3>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-content">{html.children}</div>
        <footer className="footer">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More Options
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/places">
                  Places
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/places/new">
                  Add Place
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}

module.exports = Def;
