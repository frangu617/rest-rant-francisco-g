const React = require("react");
const Def = require("../default");

function show({ place}) {
  return (
    <Def>
      <main className="show-main">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={place.pic}
              alt={place.name}
              className="img-show"
            />
            <h3>Located in {place.city}, {place.state}</h3>
          </div>
          <div className="col-sm-6">
            <h1>{place.name}</h1>
            <h2>Rating</h2>
            <p>
              <div className="stars-outer">
                <div
                  className="stars-inner"
                  style={{ width: `${place.starRating * 20}%` }}
                >
                  <p>Not Rated Yet</p>
                </div>
              </div>
            </p>
            <br />
            <h2>Description</h2>
            <h3>{place.showEstablished()}</h3>

            <h4>Serving {place.cuisines}</h4>
            <br />
            
            <p>
              {place.city}, {place.state}
            </p>
            <div className="row">
              <div className="col">
                <a href={`/places/${place.id}/edit`} className="btn btn-lg btn-warning">
                  Edit
                </a>
              </div>
              <div className="col">
                <form
                  method="POST"
                  action={`/places/${place.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-danger btn-lg">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <h2>Comments</h2>
          <p>No comments yet!</p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
