import React from 'react';
import PropTypes from 'prop-types';
const Title = ({ text }) => <h2 className="sr-only">{text}</h2>;
const Subtitle = ({ text }) => <p className="subtitle">{text}</p>;
const Text = ({ text }) => <p className="text">{text}</p>;
const Hero = ({ title, subtitles, text }) => {
  return (
    <div className="hero">
      <section className="hero-content">
        <Title text={title} />
        {subtitles.map((subtitle, index) => (
          <Subtitle key={index} text={subtitle} />
        ))}
        <Text text={text} />
      </section>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string
};
Hero.defaultProps = {
  title: 'Promoted Content',
  subtitles: ['No fees.', 'No minimum deposit.', 'High interest rates.'],
  text: 'Open a savings account with Argent Bank today!'
};

export default Hero;
