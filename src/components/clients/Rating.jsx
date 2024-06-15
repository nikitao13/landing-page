import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const ReadOnlyRating = () => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={5} readOnly />
    </Box>
  );
}

export default ReadOnlyRating;
