import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Deck from './components/Deck.jsx';
import Foundations from './components/Foundations.jsx';
import Tablu from './components/Tablu.jsx';
import dec from './Backend/Deck.js'
import card from './Backend/card.js'
// import Card from './Backend/card.js';
import Tableu from './Backend/Tableu.js';
import Stockpile from './Backend/StockPile.js';
import foundation from './Backend/Foundation.js';
import { useState,useEffect } from 'react';
function App() {
const [deck,setDeck] = useState(new dec())
const [isSet,setcards] = useState(false)
const [tableu,setTableu] = useState(new Tableu())
const [stockpile,setStockpile] = useState(null)
const [update,setisupdate] = useState(false)
const [isClicked,setisClicked] = useState(false)
const [topCard,settopCard] = useState(null)
const [foundations,setFoundation] = useState(new foundation())
  useEffect(() => {
    deck.shuffleDeck();
    deck.DisplayCards();
    const newTableu = new Tableu(deck);
    newTableu.initializeTableu();
    setTableu(newTableu);
    const newstockpile = new Stockpile(deck);
    newstockpile.initializeStockpile();
    setStockpile(newstockpile);
    setcards(true);
    console.log("Foundation",foundations)
    // console.log(deck.top)
  },[]) 
  const removeCardFromDec = () =>
    {
        // stockpile.cards = stockpile.getWholeStockpile();
        {
            const newCard = stockpile.peek();
            if(newCard)
            {   let anotherCard = new card(newCard.suit,newCard.rank)
                settopCard(anotherCard)
                stockpile.rear -= 1;
                console.log("New card",anotherCard)
                // settopCard(new card(newCard.suit,newCard.rank))
            }
        }
        setisupdate(!update)
    }
    const deckClick = () =>
    {
        setisClicked(true);
        console.log(deck)
        if(stockpile.rear >= 0) {
        const newCard = stockpile.popCard();
        if(newCard)
        {
            settopCard(new card(newCard.suit,newCard.rank))
            stockpile.pushCard(newCard)
            // stockpile.cards = stockpile.getWholeStockpile();
            console.log(newCard)
        }
        else
        {
            console.log("no more cards in the deck")
        }
        }
        else
        {
            console.log("I wont work")
        }
        
    }
  return (
    <div className="w-full h-lvh bg-green-700 flex flex-col gap-5">
      <div className='w-full h-[30%] bg-green-700 flex flex-row gap-64 items-center'>
        <Deck Dec = {stockpile} topCard = {topCard} deckClick = {()=>deckClick()} update ={update} isClicked = {isClicked}/>
        <Foundations foundation = {foundations}/>
      </div>
      <div className='w-full h-[70%] flex flex-col'>
      {isSet ? (
          <>
            {/* {console.log(tableu)} */}
            {console.log("stockpile in app",stockpile)}
            <Tablu tableu={tableu} Dec={stockpile} removeCardFromDec = {removeCardFromDec} />
          </>
        ) : null}
      </div>
      {/* <Card suit="club" rank="2" faceUp={true} onClick={() => console.log('Card clicked!')}/> */}
     
    </div>
  );
}

export default App;
