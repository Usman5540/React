import PropTypes from 'prop-types'; // Import PropTypes

function Button({
  text,
  //type button is missing let see
  BGcolor = 'bg-red-700',
  ClsName = '',
  textColor = 'white',
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${BGcolor}${textColor}${ClsName} `}
      {...props}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  BGcolor: PropTypes.string,
  ClsName: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
