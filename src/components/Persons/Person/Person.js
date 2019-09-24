import React from "react";
import style from "./Person.module.css";

const person = props => {
  return <div className={style.Person}>
    <p onClick={props.click}>
      I'm {props.name}, and I am {props.age}!
    </p>
    <input type="text" onChange={props.changed} value={props.name}/>
  </div>
};

export default person;
