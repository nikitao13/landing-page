import PropTypes from "prop-types";
import Logo from "../../assets/plumbing-white.png";

export default function Ribbon({ text }) {
  return (
    <div className="flex items-center absolute bottom-0 left-0">
      <div className="flex items-center bg-light-blue/90 h-[2.1rem] pl-2 pr-2">
        <img
          src={Logo}
          className="h-5 w-5"
        />
      </div>
      <div className="relative flex items-center text-sm font-semibold h-[2.1rem] bg-[#002441]/90 text-white py-1 pl-4 w-56 clip-path-skew">
        {text}
      </div>
    </div>
  );
}

Ribbon.propTypes = {
  text: PropTypes.string.isRequired
};
