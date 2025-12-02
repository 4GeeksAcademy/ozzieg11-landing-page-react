import React from "react";

const cards = [
  {
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
  },
  {
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
  },
  {
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
  },
  {
    title: "Card title",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
  }
];

const CardsSection = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          {cards.map((card, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="card h-100 text-center">
                <div className="card-img-top d-flex align-items-center justify-content-center bg-light"
                     style={{ height: "180px", fontSize: "24px", color: "#999" }}>
                  500 x 325
                </div>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary btn-sm">
                    Find Out More!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;