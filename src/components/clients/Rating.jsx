import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const ReadOnlyRating = ({ skew }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
      className={skew ? "skew-x-12" : ""}
    >
      <Rating
        name="read-only"
        value={5}
        readOnly
      />
    </Box>
  );
};

ReadOnlyRating.propTypes = {
  skew: PropTypes.bool
};

ReadOnlyRating.defaultProps = {
  skew: false
};

export default ReadOnlyRating;
