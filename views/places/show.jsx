const React = require("react");
const Def = require("../default");

function show(data) {
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
              <p className="fw-bolder">Not Rated</p>
            </div>
            <div className="col">
              <h3 className="text-primary fs-1">Description</h3>
              <p className="fw-bolder">
                Located in {data.place.city}, {data.place.state} and serves{" "}
                {data.place.cuisines} cuisine
              </p>
            </div>
            <div className="col">
              <h4 className="text-primary fs-1">Comments</h4>
              <p className="fw-bolder">No comments yet</p>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;

// /places/${data.id}/edit