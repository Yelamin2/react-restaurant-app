import React from 'react';
import { useState } from 'react';
import Customer from './components/Customer/Customer';

import './App.css';

function App() {
  const [selection, setSelection] = useState("a");
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <button value="a" onClick={(e) => setSelection(e.target.value)}>
              Blog Form
            </button>
          </li>
        </ul>
      </nav>
      {selection === "a" && <Customer/>}
    </div>
  );
}

export default App;
