import { useCallback, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]);

  const decrementCount = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default Counter;
