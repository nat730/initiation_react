import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>{count}</button>
    </div>
  );
};

export default Counter;