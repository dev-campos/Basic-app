import React from 'react';
import Person from "./Person/Person"

const persons = (props) => props.persons.map((person) => {
  return (<Person key={person.id} name={person.name} age={person.age} click={() => props.click(person.id)} changed={(event) => props.changed(event, person.id)}/>)
})

export default persons;
