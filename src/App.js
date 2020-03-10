import React from 'react';

const State = ({ initialState, children }) => {
  const [value, setValue] = React.useState(initialState);

  const handleValue = value => {
    setValue(value);
  };

  return children(value, handleValue);
};

const App = () => (
  <State initialState={true}>
    {(toggle, handleToggle) => (
      <div>
        <button type="button" onClick={() => handleToggle(!toggle)}>
          {toggle ? 'Hide' : 'Show'}
        </button>

        {toggle && <span>Hello React</span>}
      </div>
    )}
  </State>
);

export default App;
