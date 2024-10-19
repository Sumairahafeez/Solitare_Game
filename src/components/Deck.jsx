import React ,{useEffect,useState}from 'react'
import Card from './Card'
import dec from '../Backend/Deck.js'
import card from '../Backend/card.js'
function Deck() {
const [deck,setDeck] = useState(new dec())
const [cards,setcards] = useState([])
const [isClicked,setisClicked] = useState(false)
const [topCard,settopCard] = useState(null)
useEffect(() => {
  deck.shuffleDeck();
//   setcards(deck.cards);
  deck.DisplayCards();
}, [])
const deckClick = () =>
{
    setisClicked(true);
    if(deck.top > 0) {
    const newCard = deck.popCard();
    if(newCard)
    {
        settopCard(new card(newCard.suit,newCard.rank))
        console.log(newCard)
    }
    else
    {
        console.log("no more cards in the deck")
    }
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