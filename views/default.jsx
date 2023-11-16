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

        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
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
