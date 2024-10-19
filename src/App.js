import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Deck from './components/Deck.jsx';
import Foundations from './components/Foundations.jsx';
function App() {
  return (
    <div className="w-full h-lvh bg-gray-500 flex flex-col">
      <div className='w-full h-[30%] bg-green-600 flex flex-row gap-64 items-center'>
        <Deck/>
        <Foundations/>
      </div>
      <div className='w-full h-[70%] border border-black flex flex-col'>
      </div>
      {/* <Card suit="club" rank="2" faceUp={true} onClick={() => console.log('Card clicked!')}/> */}
    </div>
  );
}

export default App;
