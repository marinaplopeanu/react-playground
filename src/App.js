import React from 'react';
// import Split from './composition/Split';
// import Messages from './Messages';
import TheDate from './state/TheDate';
// import './App.css';
// import './Split.css';
// import Tooltip from './composition/Tooltip';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';


function App() {
  return (
    <main className='App'>

    <TheDate />
    <Counter count={123} />
    <HelloWorld/>
    <Bomb/>
    <RouletteGun/>
    </main>
  )
}

export default App