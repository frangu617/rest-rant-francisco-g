const React = require("react");
const Def = require("../default");

function edit({ place }) {
  console.log(place.id)
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form action={`/places/${place.id}?_method=PUT`} method="POST">
          <div className="row">
            <div className="form-group col">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={place.name}
                required
                defaultValue={place.name}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="pic">Place Picture</label>
              <input
                className="form-control"
                id="pic"
                name="pic"
                value={place.pic}
                defaultValue={place.pic}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="city">City</label>
              <input
                className="form-control"
                id="city"
                name="city"
                value={place.city}
                defaultValue={place.city}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="state">State</label>
              <input
                className="form-control"
                id="state"
                name="state"
                value={place.state}
                defaultValue={place.state}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                value={place.cuisines}
                defaultValue={place.cuisines}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="founded">Founded</label>
              <input
                className="form-control"
                id="founded"
                name="founded"
                value={place.founded}
                defaultValue={place.founded}
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit;
