import {useState } from 'react';

const Forms = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [colorValue, setcoloredValue] = useState('#000000');
  const upperCaseValue = enteredValue.toUpperCase();

  const handleChange = (event:any) => {
    setEnteredValue(event.target.value);
  };

  const colorChange = (event:any) => {
    
    setcoloredValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="Nom">Nom :</label>
      <input
        type="text"
        id="Nom"
        onChange={handleChange}
        value={enteredValue}
      />
      <input
        type="color"
        id="Color"
        onChange={colorChange}
        value={colorValue}
      />
      <p style={{color: colorValue}}>{upperCaseValue}</p>
    </div>
  );
};

export default Forms;


//source : https://www.delftstack.com/fr/howto/react/react-input/#obtenir-la-valeur-du-champ-de-saisie-dans-react-16