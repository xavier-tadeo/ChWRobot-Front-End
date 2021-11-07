const CardRoobot = () => {
  return (
    <section className="containerCard">
      <div className="cardRoobot">
        <h2 className="cardRoobot__name">Bender</h2>
        <img src="" alt="imagenRoobot" className="cardRoobot__img" />
        <div className="cardRoobot__features">
          <p className="cardRoobot__features-speed">Speed: 5</p>
          <p className="cardRoobot__features-endurance">Endurance: 5</p>
          <p className="cardRoobot__features-creationDate">
            Creation Date: 3000
          </p>
        </div>
      </div>
      <div className="btn">
        <button className="btn__delete">DELETE</button>
        <button className="btn__modify">MODIFY</button>
      </div>
    </section>
  );
};

export default CardRoobot;
