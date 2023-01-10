import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ title }) {
  const [value, setValue] = useState(0); // value is name of variable
  // whatever is in () of useState defines type of variable value is
  const handleClick = (buttonType) => {
    switch (buttonType) {
      case 'increment':
        setValue((prevState) => prevState + 1);
        break;
      case 'decrement':
        setValue((prevState) => prevState - 1);
        break;
      case 'reset':
        setValue(0);
        break;
      default:
        setValue(0);
    }
  };
  return ( // value is state variable not a prop
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
  title: PropTypes.string, // Proptypes.string.isRequired
};// would be used if there was no default property
Counter.defaultProps = {
  title: 'Counter Title',
};

// user is a state variable
// that is accessed outside of the component
// props are passed around
// state is being changed/rerenddered etc
