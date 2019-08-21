import React from 'react';
// import Split from './composition/Split';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import './App.css';
// import './Split.css';
// import Tooltip from './composition/Tooltip';
// import Counter from './state/Counter';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import RouletteGun from './state-drills/RouletteGun';
// import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';
// const tabsProp = [{
//     name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
//   },
//   {
//     name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
//   },
//   {
//     name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
//   },
// ];

// function App() {
//   return (
//     <main className='App'>

//     {/* <TheDate />
//     <Counter count={123} />
//     <HelloWorld/>
//     <Bomb/>
//     <RouletteGun/> */}
//     <Tabs/>
//     </main>
//   )
// }

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
class App extends React.Component {
  render() {
    return (<div>
      <Accordion sections={sections}/>
    </div>)
  }
}
export default App;