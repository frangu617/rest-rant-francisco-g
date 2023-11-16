const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6 text-center">
        <h2>
          <a href={`/places/${index}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <a href={`/places/${index}`}>
          <img
            src={place.pic}
            alt={place.name}
            width="400px"
            className="mx-auto d-block"
          />
        </a>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>PLACES TO RANT OR RAVE ABOUT</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
