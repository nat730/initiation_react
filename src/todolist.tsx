import React, { useEffect, useState } from 'react';

const ToDoList = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [tableau, setTableau] = useState<string[]>([]);

  useEffect(() => {
    const savedTaches = localStorage.getItem('taches');
    if (savedTaches) {
      setTableau(JSON.parse(savedTaches));
    }
    document.title = "tu as" + tableau.length + "euros"
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const handleAddClick = () => {
    if (enteredValue !== "") {
      const updatedTableau = [...tableau, enteredValue];
      const tableauString = JSON.stringify(updatedTableau)
      localStorage.setItem("taches", tableauString)
      setTableau(updatedTableau);
      setEnteredValue('');
    }
    else {
      alert("veuillez remplir le champ");
    }
  };

  const handleDeleteClick = (index: number) => {
    const updatedTableau = tableau.filter((_, i) => i !== index);
    localStorage.setItem("taches", JSON.stringify(updatedTableau));
    setTableau(updatedTableau);
  };


  return (
    <div>
      <label htmlFor="text">À faire :</label>
      <input
        type="text"
        id="Form"
        onChange={handleChange}
        value={enteredValue}
      />
      <button onClick={handleAddClick}>Ajouter</button>
      <ul>
        {tableau.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteClick(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
