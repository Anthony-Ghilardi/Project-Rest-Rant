const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!</h3>
      ) 
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😀"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main className="container">
        <div>
          <div className="row">
            <h1 className="text-primary fs-1">{data.place.name}</h1>
            <div className="row">
              <p className="col">{data.place.pic}</p>
            </div>
            <div className="col">
              <h2 className="text-primary fs-1">Rating</h2>
              {rating}
            </div>
            <div className="col">
              <h3 className="text-primary fs-1">Description</h3>
              <p className="fw-bolder">
                Located in {data.place.city}, {data.place.state}
              </p>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </div>
            <div className="col">
              <h4 className="text-primary fs-1">Comments</h4>
              {comments}
            </div>
            <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">
              Edit this restaurant
            </a>
            <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete this restaurant
              </button>
            </form>
            <h1>Leave a review!</h1>
            <form id="comment-form" method="POST" action={`/places/${data.place._id}/rant`}>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="author">Your Name</label>
                  <input 
                  id="author"
                  name="author"
                  className="form-control" />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="content">Your Comment</label>
                  <textarea
                    id="content"
                    name="content"
                    className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="stars">Star Rating</label>
                  <input
                    id="stars"
                    name="stars"
                    type="range"
                    step="0.5"
                    min="1"
                    max="5"
                    className="form-control" />
                </div>
              </div>
              <div>
              <label htmlFor="rant">Rant?</label>
                <input 
                type="checkbox"
                id="rant"
                name="rant" />
              </div>
              <input 
              type="submit"
              className="btn btn-primary" value="Add Comment" />
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;