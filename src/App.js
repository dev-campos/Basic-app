import React, {useState} from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [persons, setPersons,] = useState([
    {
      id: "key1",
      name: "Daniel",
      age: "28",
    }, {
      id: "key2",
      name: "John",
      age: "30",
    }, {
      id: "key3",
      name: "Doe",
      age: "60",
    },
  ]);
  const [show, setShow,] = useState(false);

  const nameChangedHandler = (id, event) => {
    console.log(event.target.value);
    console.log(id);
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...persons[personIndex]
    };

    person.name = event.target.value;

    const pers = [...persons];
    pers[personIndex] = person;

    setPersons(pers);
  };

  const togglePersonsHandler = () => {
    setShow(!show);
  };

  const deletePersonHandler = id => {
    const pers = [...persons].filter(person => {
      return person.id !== id;
    });
    setPersons(pers);
  };

  let people = null;

  if (show) {
    people = persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={deletePersonHandler.bind(this, person.id)}
          changed={nameChangedHandler.bind(this, person.id)}/>
      );
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={togglePersonsHandler}>Toggle Persons</button>
      {people}
    </div>
  );
};

export default App;
