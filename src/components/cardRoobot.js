const CardRoobot = ({ roobot }) => {
  return (
    <section className="containerCard">
      <div className="cardRoobot">
        <h2 className="cardRoobot__name">{roobot.name}</h2>
        <img
          src={roobot.imageSource}
          alt="imagenRoobot"
          className="cardRoobot__img"
        />
        <div className="cardRoobot__features">
          <p className="cardRoobot__features-speed">
            Speed: {roobot.features.speed}
          </p>
          <p className="cardRoobot__features-endurance">
            Endurance: {roobot.features.endurance}
          </p>
          <p className="cardRoobot__features-creationDate">
            Creation Date: {roobot.features.creationDate}
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
