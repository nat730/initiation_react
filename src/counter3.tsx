import { useCallback, useState, useMemo } from "react";

const Counter3 = (props: { count: number }) => {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    if (count < 10) {
    setCount(count + 1);
  }}, [count]);

  const decrementCount = useCallback(() => {
    if (count > 0) {
    setCount(count - 1);
}}, [count]);

  const countTotal = useMemo(() => {
    let res = props.count + count

    if(res > 10){
        res = 10
    }
    
    return res
  }, [props.count, count]);

  return (
    <div>
      <div>Total Count: {countTotal}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default Counter3;
