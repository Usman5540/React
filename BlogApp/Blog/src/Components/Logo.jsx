import propTypes from 'prop-types';
function Logo({ width = '100px' }) {
  return <div style={{ width }}>Logo</div>;
}
Logo.propTypes = {
  width: propTypes.string,
};
export default Logo;
