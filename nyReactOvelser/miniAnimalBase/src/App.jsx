import { useState } from "react";

import "./App.css";
import data from "./animals.json";

function cleanUpData() {
  /* {
    "fullname": "Mandu the amazing cat",
    "age": 10
} */
  return data.map(animal => {
    const [name, , trait, type] = animal.fullname.split(" ");
    return {
      name,
      trait,
      type,
      age: animal.age,
    };
  });
}

function App() {
  const animals = cleanUpData();
  const [filter, setFilter] = useState("");

  let filterAnimals = [...animals];
  if (filter) {
    filterAnimals = filterAnimals.filter(ani => ani.type === filter);
  }
  return (
    <div className="App">
      <h1>Mini Animal Base</h1>
      <button onClick={() => setFilter("cat")}>Only cats</button>
      <button onClick={() => setFilter("dog")}>Only dogs</button>
      <button onClick={() => setFilter("")}>All</button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Trait</td>
            <td>Type</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {filterAnimals.map(animal => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>{animal.name}</td>
              <td>{animal.trait}</td>
              <td>{animal.type}</td>
              <td>{animal.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
