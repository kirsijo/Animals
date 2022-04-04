import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className={`${classes.card}`}>
      <Image title={props.title} />
      <h2>{props.title}</h2>
      <p>
        <span className="material-icons">favorite</span>
        {props.likes}
      </p>
      <button onClick={props.add}> Like </button>
    </div>
  );
};

const Image = (props) => {
  return (
    <img src={`https://source.unsplash.com/1600x900/?${props.title}`}></img>
  );
};

export default Card;

/*src={`https://source.unsplash.com/1600x900/?${props.title}`}*/

/*
const Button = (props) => {
    return (
      <button
        className={`${classes.button} ${classes[props.type]}`}
        onClick={props.click}
      >
        {props.value}
        {props.children}
      </button>
    );
  };
  
  export default Button;
  */

/*
const Box = (props) => {
  return (
    <div className="box">
      <h2>{props.name}</h2>
      <p>{props.title}</p>
      <p>{props.age}</p>
      <ul>{props.lang}</ul>
    </div>
  );
};

export default Box;*/

/* className={`${classes.button}*/
