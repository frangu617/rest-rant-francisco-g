const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main className="home-main">
        <h1>REST-Rant</h1>
        <div>
          <img
            src="/images/restaurant.png"
            alt="AI restaurant Image"
            width="500px"
          />
          <div>
            Photo by <a href="https://www.openai.com/">DALL·E by OpenAI</a>{" "}
          </div>
        </div>
        <div>
          <h2 style={{ display: "inline" }}>Click here to go</h2>
          <a href="/places">
            <button className="btn btn-lg btn-primary ">Places!</button>
          </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
