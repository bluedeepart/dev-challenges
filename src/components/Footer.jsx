import PropTypes from "prop-types";

const Footer = ({ username }) => {
  return (
    <footer>
      <p className="mb-34"><code>Icons: https://material.io/resources/icons/?style=round</code></p>
      <p>created by <a href="https://github.com/bluedeepart" target="_blank" rel="noopener noreferrer">{username}</a> - devChallenges.io</p>
    </footer>
  );
};

Footer.defaultProps = {
  username: "bluedeepart",
};

Footer.prototype = {
    username: PropTypes.string
}

export default Footer;
