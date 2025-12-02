import React from "react";

const Jumbotron = () => {
  return (
    <header className="py-5 bg-dark text-light border-bottom mb-4">
      <div className="container">
        <div className="text-start">
          <h1 className="display-4">A Warm Welcome!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam,
            eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <button className="btn btn-primary btn-lg">Call to action!</button>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;