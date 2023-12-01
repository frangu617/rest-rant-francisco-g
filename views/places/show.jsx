const React = require("react");
const Def = require("../default");

function show({ place }) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = (
    <h3 className = "inactive">
      Not yet rated
    </h3>
  )
  
  if (place.comments.length) {
    let sumRatings = place.comments.reduce((tot, c) =>{
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / place.comments.length 
    rating = (
      <h3>
        {Math.round (averageRating)} stars
      </h3>
    )
    comments = (
    <div className='row'>
    {place.comments.map((c, index) => {
      return (
        <div key={index} className="col-md-4 md-4">
        <div className="border">
          <h2 className="rant">
            {c.rant ? `Rant! \u{1F621}` : `Rave! \u{1F60D}`}
          </h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h3>Rating: {c.stars}</h3>
        </div>
      </div>
    )})
    }
    </div>
    );
  }
  return (
    <Def>
      <main className="show-main">
        <div className="row">
          <div className="col-sm-6">
            <img src={place.pic} alt={place.name} className="img-show" />
            <h3>
              Located in {place.city}, {place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{place.name}</h1>
            <h2>Rating</h2>
            {rating}
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
                <a
                  href={`/places/${place.id}/edit`}
                  className="btn btn-lg btn-warning"
                >
                  Edit
                </a>
              </div>
              <div className="col">
                <a
                  href={`/places/${place.id}/comment/new`}
                  className="btn btn-lg btn-secondary"
                >
                  Add Comment
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
          </div>           
          {comments}                 
      </main>
    </Def>
  );
}

module.exports = show;
