import { useState, useCallback, useMemo } from 'react';

const List = (props) => {
  const [name, setName] = useState(['Thomas', 'Yoann', 'Aly', 'Jeremy']);

  const upperCaseName = useMemo(
    () => name.map((name) => name.toUpperCase()).join(', '),
    [name]
  );

  const handleClick = useCallback(
    () => setName(['Thomas', 'Yoann', 'Aly', 'Jeremy']),
    []
  );

  return (
    <div>
      <h1>Prénom du prof : {upperCaseName}</h1>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};

export default List; // Export the component as List
