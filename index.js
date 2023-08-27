const element = (
  <div className="bg-container">
    <p className="heading"> Congratulations </p>
    <div className="card">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1> Moon </h1>
      <p className="paragraph">
        Moon Institute of Computer Education and Tech, Bangalore{" "}
      </p>
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
