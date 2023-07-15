import { createContext, useState } from 'react';
import './App.css';
import { ComponentA } from './components/ComponentA';

export const UseCount = createContext();

function App() {
  const [ count, setCount ] = useState(42);

  return (
    <div className="App">
      <UseCount.Provider value={{ count, setCount }}>
        <h1>hello world</h1>
        <ComponentA/>
      </UseCount.Provider>
    </div>
  );
}

export default App;
