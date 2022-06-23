import "./Place.css";

const Place = (props) => {
  return (
    <div className="place">
      <img src={props.image} alt="" />

      <div className="description">
        <p className="place-desc">{props.place}</p>
        <p className="desc">{props.description}</p>
        <p className="duration">{props.duration}</p>
        <p className="price">
          <span>&#8377;</span>
          {props.price}
        </p>
      </div>
    </div>
  );
};

export default Place;
