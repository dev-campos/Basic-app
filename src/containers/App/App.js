import React, {useState} from "react";
import style from "./App.module.css";
import Cockpit from "../../components/Cockpit/Cockpit"
import Persons from "../../components/Persons/Persons";
import ErrorBoundary from "../../hoc/ErrorBoundary/ErrorBoundary"

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: "key1",
      name: "Daniel",
      age: "28"
    }, {
      id: "key2",
      name: "John",
      age: "30"
    }, {
      id: "key3",
      name: "Doe",
      age: "60"
    }
  ]);
  const [show, setShow] = useState(false);

  const nameChangedHandler = (event, id) => {
    const updatedPersons = persons.map((person) => {
      if (person.id === id) {
        return {
          ...person,
          name: event.target.value
        }
      }
      return person

    })

    setPersons(updatedPersons);
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
    people = <Persons persons={persons} click={deletePersonHandler} changed={nameChangedHandler}/>;
  }

  return (<div className={style.App}>
    <Cockpit togglePersonsHandler={togglePersonsHandler} show={show}/> {people}
  </div>);
};

export default App;
