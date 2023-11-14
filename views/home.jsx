const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/sam-moghadam-pancakes.jpg"
            alt="Pancake stack"
            width="500px"
          />
          <div style={{marginBottom: "50px"}}>
            Photo by{" "}
            <a href="https://unsplash.com/@sammoghadamkhamseh">
              Sam Moghadam Khamseh
            </a>{" "}
            on{" "}
            <a href="https://images.unsplash.com/photo-1598214887283-1b96ceceea96?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
              Unsplash
            </a>{" "}
          </div>
        </div>
        
        <a href="/places">
          <button className="btn btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
