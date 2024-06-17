import PropTypes from "prop-types";
import Stars from "../sectionseven/Rating";

export default function RightSticker({ num, text, rating, colour }) {
  const bgColour = colour ? colour : "bg-blue-500";

  return (
    <div
      className={`-skew-x-12 relative flex flex-col items-center justify-center ${bgColour} p-4 w-40 h-44`}
    >
      <div className="text-[3.5rem] font-black skew-x-12 pr-3 text-white antialiased">
        {num}
      </div>
      {rating ? <Stars skew={true} /> : null}
      {rating ? (
        <p className="text-white text-xs font-thin skew-x-12 ml-">
          Average Rating
        </p>
      ) : null}
      <div className="text-white mt-1 ml-1 skew-x-12 font-semibold antialiased">
        {text}
      </div>
    </div>
  );
}

RightSticker.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.bool,
  colour: PropTypes.string
};

RightSticker.defaultProps = {
  rating: false
};
