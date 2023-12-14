import React, { useState } from 'react';
import usePreviousValue from './CustomHook'; // Import your custom hook

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePreviousValue(count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount !== undefined ? previousCount : 'N/A'}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
};

export default ExampleComponent;