const React = require("react");
const Def = require("../default");


function commentsForm({place}) {
  return (
    <Def>
      <main>
        <h1>Add a Comment for {place.name}</h1>
        <form action={`/places/${place.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col">
              <label htmlFor="name">Author</label>
              <input
                className="form-control"
                type = "text"
                id="author"
                name="author"
                
                required
                
              />
            </div>
            <div className="form-group col">
              <label htmlFor="content">Comment</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="range"
                className="form-range"
                id="stars"
                name="stars"
                min="0"
                max="5"
                step="0.5"
              />
            </div>
            <div className="form-check col">
              <input
                type="checkbox"
                className="form-check-input"
                id="rant"
                name="rant"
              />
              <label htmlFor="rant">Rant</label>
            </div>
          </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </main>
    </Def>
  );
}

module.exports = commentsForm;
