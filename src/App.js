import React, { useState } from "react";
import { Data } from "./Data";
import List from "./List";
import "./index.css";

function App() {

  const [people, setPeople] = useState(Data);

  return (
    <div className="container">
      <h2>Birthday Reminder</h2>
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
