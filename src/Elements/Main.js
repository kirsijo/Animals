import React from "react";
import Card from "./Card.js";
import { animals } from "./animals.js";
import classes from "./Main.module.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animals };
  }
  render() {
    return (
      <main>
        <div className={`${classes.animalsList}`}>
          {this.state.animals.map((animal) => (
            <Card
              key={animal.name}
              title={animal.name}
              likes={animal.likes}
              add={() => this.addLikeHandler(animal.name)}
            ></Card>
          ))}
        </div>
      </main>
    );
  }

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedanimalsList = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedanimalsList,
      };
    });
  };
}

export default Main;
