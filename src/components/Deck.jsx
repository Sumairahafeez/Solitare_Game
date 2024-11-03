import React ,{useEffect,useState}from 'react'
import Card from './Card'
// import dec from '../Backend/Deck.js'
import card from '../Backend/card.js'
import Stockpile from '../Backend/StockPile.js'
function Deck({Dec}) {
const [deck,setDeck] = useState(Dec)
const [cards,setcards] = useState([])
const [isClicked,setisClicked] = useState(false)
const [topCard,settopCard] = useState(null)
const deckClick = () =>
{
    setisClicked(true);
    console.log(Dec)
    if(Dec.rear >= 0) {
    const newCard = Dec.popCard();
    if(newCard)
    {
        settopCard(new card(newCard.suit,newCard.rank))
        Dec.pushCard(newCard)
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
    <div className='w-[25%] h-[95%] border-gray-800 rounded-md  flex flex-row justify-center items-center gap-10'>
        <div className='w-[37%] h-[95%] bg-contain' style={{backgroundImage: `url(${require(`../assets/card-back.png`)})`}} onClick={()=>{deckClick()}}></div>
        {isClicked && topCard ?
        (<div className='w-[37%] h-[95%]'>
        <Card suit = {topCard.suit} rank = {topCard.rank} faceUp={true} onClick={() => console.log('Card clicked!')} />
        </div>)
        :
        null
        }
        
    </div>
  )
}

export default Deck