const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main className="show-main">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={data.place.pic}
              alt={data.place.name}
              className="img-show"
            />
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>
              <div className="stars-outer">
                <div
                  className="stars-inner"
                  style={{ width: `${data.place.starRating * 20}%` }}
                >
                  <p>Not Rated Yet</p>
                </div>
              </div>
            </p>
            <br />
            <h2>Description</h2>
            <p>{data.place.cuisines}</p>
            <br />
            <h2>Located in</h2>
            <p>
              {data.place.city}, {data.place.state}
            </p>
            <div className="row">
              <div className="col">
                <a href={`/places/${data.id}/edit`} className="btn btn-lg btn-warning">
                  Edit
                </a>
              </div>
              <div className="col">
                <form
                  method="POST"
                  action={`/places/${data.id}?_method=DELETE`}
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
