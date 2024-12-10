import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool, // Ensures loading is a boolean and is provided
};

Spinner.defaultProps = {
  loading: false, // Optional: Default to not loading if no prop is provided
};

export default Spinner;
