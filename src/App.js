import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Deck from './components/Deck.jsx';
import Foundations from './components/Foundations.jsx';
import Tablu from './components/Tablu.jsx';
import dec from './Backend/Deck.js'
import card from './Backend/card.js'
import Tableu from './Backend/Tableu.js';
import { useState,useEffect } from 'react';
function App() {
const [deck,setDeck] = useState(new dec())
const [isSet,setcards] = useState(false)
const [tableu,setTableu] = useState(null)
  useEffect(() => {
    deck.shuffleDeck();
    deck.DisplayCards();
    const newTableu = new Tableu(deck);
    newTableu.initializeTableu();
    setTableu(newTableu);
    console.log(deck.top)
  },[]) 
  return (
    <div className="w-full h-lvh bg-green-700 flex flex-col gap-5">
      <div className='w-full h-[30%] bg-green-700 flex flex-row gap-64 items-center'>
        <Deck Dec = {deck}/>
        <Foundations/>
      </div>
      <div className='w-full h-[70%] flex flex-col'>
       setcards ? 
       {console.log(isSet)}
      <Tablu tableu = {tableu}/>
      :
      null
      </div>
      {/* <Card suit="club" rank="2" faceUp={true} onClick={() => console.log('Card clicked!')}/> */}
     
    </div>
  );
}

export default App;
