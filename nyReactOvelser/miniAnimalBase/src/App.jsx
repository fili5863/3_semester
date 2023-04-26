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
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("ASC");

  let filteredAnimals = [...animals];
  if (filter) {
    filteredAnimals = filteredAnimals.filter(ani => ani.type === filter);
  }

  if (sortKey) {
    filteredAnimals.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortDirection === "ASC" ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortDirection === "ASC" ? 1 : -1;
      }

      // names must be equal
      return 0;
    });
  }
  function setSorting(key) {
    if (key === sortKey) {
      //opposite
      setSortDirection(old => (old === "ASC" ? "DESC" : "ASC"));
    } else {
      setSortDirection("ASC");
    }
    setSortKey(key);
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
            <td>
              <button onClick={() => setSorting("name")}>Name</button>
            </td>
            <td>
              <button onClick={() => setSorting("trait")}>Trait</button>
            </td>
            <td>
              <button onClick={() => setSorting("type")}>Type</button>
            </td>
            <td>
              <button onClick={() => setSorting("age")}>Age</button>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.map(animal => (
            // eslint-disable-next-line react/jsx-key
            <tr key={animal.name}>
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
