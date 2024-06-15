import PropTypes from "prop-types";

export default function DeliverSticker({ Icon, title, text }) {
  const styles = {
    sticker:
      "bg-white h-[160px] w-[270px] pr-4 skew-x-6 flex flex-col items-start",
    icon: "text-blue-500 text-6xl m-4",
    header:
      "mt-8 max-w-max text-blue-500 font-extrabold leading-5 skew-x-6 text-2xl",
    text:
        "skew-x-6 text-black pl-5 mt-0.5 leading-4 text-sm font-light"
  };

  return (
    <div className={styles.sticker}>
      <div className="flex items-center">
        <Icon className={styles.icon} />
        <h1 className={styles.header}>{title}</h1>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

DeliverSticker.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
