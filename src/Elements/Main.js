import React from "react";
import Card from "./Card.js";
import { animals } from "./animals.js";
// js is not always needed as REACT assumes the file is JS
import classes from "./Main.module.css";

//State is needed to build up the rendering.

class Main extends React.Component {
  state = {
    animals: animals,
    isLoading: false,
    search: "",
  };

  /*
  constructor(props) {
    super(props);
    this.state = { animals };
  }
*/

  searchHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <main>
        <div>
          <h1>{this.state.animals.length} Animals </h1>
          <div className={`${classes.animalsList}`}>
            <input type="text" onChange={this.searchHandler} />
          </div>
          {animalFilter.map((animal) => (
            <Card
              //search={this.state.search}
              key={animal.name}
              title={animal.name}
              likes={animal.likes}
              add={() => this.addLikeHandler(animal.name)}
              remove={() => this.removeCardHandler(animal.name)}
            ></Card>
          ))}
        </div>
      </main>
    );
  }

  removeCardHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({
      animals: updatedArray,
    });
  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedanimalsList = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
          // to be able to edit the object, we need to open it with a spread method
          // now we can select likes
          //The Spread operator lets you expand an iterable like an object, string, or array into its elements while the Rest operator does the inverse by reducing a set of elements into one array.
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
