import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h3>{props.search}</h3>
      <div>
        <Image title={props.title} />
        <button className={classes.remove} onClick={props.remove}>
          {" "}
          X
        </button>
      </div>
      <h2>{props.title}</h2>
      <div className={classes.likes_container}>
        <p>
          <span className="material-icons">favorite</span>
          {props.likes}
        </p>
        <button onClick={props.add}> Like </button>
      </div>
    </div>
  );
};

const Image = (props) => {
  return (
    <img
      src={`https://source.unsplash.com/1600x900/?${props.title}`}
      alt={props.name}
    ></img>
  );
};

export default Card;
