import React, {Fragment} from 'react';
import style from "./Cockpit.module.css"

const cockpit = (props) => {
  let btnStyle = props.show
    ? style.toggledButton
    : style.untoggledButton

  return (<Fragment>
    <h1>Hi, I'm a React App</h1>
    <p>This is really working!</p>
    <button className={style.Button + " " + btnStyle} onClick={props.togglePersonsHandler}>Toggle Persons</button>
  </Fragment>)
};

export default cockpit;
