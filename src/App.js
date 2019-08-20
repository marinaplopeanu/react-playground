import React from 'react';
// import Split from './composition/Split';
// import Messages from './Messages';
import TheDate from './state/TheDate';
// import './App.css';
// import './Split.css';
// import Tooltip from './composition/Tooltip';
import Counter from './state/Counter';


function App() {
  return (
    <main className='App'>

    <TheDate />
    <Counter count={123} />
    </main>
  )
}

export default App