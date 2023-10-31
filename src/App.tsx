import HelloWorld from './helloWorld';
import Counter from "./counter";
import List from "./list";
import Forms from "./Forms";
import TodoList from "./todolist";
import './App.css';
import { useState } from 'react';
import Counter3 from './counter3';

const App = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  const incrementBothCounters = () => {
    if (count < 10 && count1 < 10) {
    setCount(count + 1);
    setCount1(count1 + 1);
    
    }
  };

  return (
    <div>
      <button onClick={incrementBothCounters}>Incrémenter les deux compteurs</button>
      <Counter3 count={count} />
      <Counter3 count={count1} />
      <HelloWorld /> 
      <Counter />
      <Counter />
      <List />
      <Forms />
      <TodoList />
    </div>
  );
};


export default App