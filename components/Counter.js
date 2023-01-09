import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = (buttonType) => {
    if (buttonType === 'increment') {
      setValue((prevState) => prevState + 1);
    } else if (buttonType === 'decrement') {
      setValue((prevState) => prevState - 1);
    } else if (buttonType === 'reset') {
      setValue(0);
    }
  };
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h3>{value}</h3>
        <button type="button" onClick={() => handleClick('increment')}>Increment </button>
        <button type="button" onClick={() => handleClick('decrement')}>Decrement </button>
        <button type="button" onClick={() => handleClick('reset')}>Reset </button>
      </div>
    </>
  );
}

Counter.propTypes = {
  title: PropTypes.string,
};
Counter.defaultProps = {
  title: 'Counter Title',
};
