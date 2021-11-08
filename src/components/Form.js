const Form = () => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <form
      className="form_create container-sm"
      autoComplete="off"
      noValidate
      onSubmit={handlerSubmit}
    >
      <label htmlFor="nameroobot">Name:</label>
      <input
        type="text"
        className="form-control"
        id="nameroobot"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <label htmlFor="imageurl">ImageURL:</label>
      <input
        type="text"
        className="form-control"
        id="imageurl"
        placeholder="Image URL"
        onChange={() => {}}
        required
      ></input>
      <label htmlFor="speed">Speed</label>
      <input
        type="range"
        min="0"
        max="10"
        id="speed"
        placeholder="Speed"
        name="speed"
        className="form-range"
        onChange={() => {}}
        required
      ></input>
      <label htmlFor="endurance">Endurance</label>
      <input
        type="range"
        min="0"
        max="10"
        id="endurance"
        placeholder="Endurance"
        name="endurance"
        required
        className="form-range"
        onChange={() => {}}
      ></input>
      <label htmlFor="creationdate">Creation Date:</label>
      <input
        id="creationdate"
        placeholder="Write here"
        name="date"
        className="form-control"
        onChange={() => {}}
        required
      ></input>
      <button className="form__button" type="submit">
        CREATE ROOBOT
      </button>
    </form>
  );
};

export default Form;
