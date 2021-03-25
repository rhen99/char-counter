import { useState } from 'react'

import Title from './components/Title/Title';
import Counter from './components/Counter/Counter';
import TextBox from './components/TextBox/Textbox';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const changeCount = value => setCount(value)
  return (
    <>
    <Title/>
    <Counter count={count}/>
    <TextBox changeCount={changeCount}/>

    </>
  );
}

export default App;
