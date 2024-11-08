import React ,{useEffect,useState}from 'react'
import Card from './Card'
// import dec from '../Backend/Deck.js'
import card from '../Backend/card.js'
import Stockpile from '../Backend/StockPile.js'
import Tablu from './Tablu.jsx'
import Validtaion from '../Backend/Validtaion.js'
function Deck({Dec , topCard , deckClick , update , isClicked}) {
    useEffect(() => {
        
    }, [update])
// const [deck,setDeck] = useState(Dec)
// const [isClicked,setisClicked] = useState(false)
// const [topCard,settopCard] = useState(null)
// const removeCardFromDec = () =>
// {
//     const card = Dec.popCard();
//     if(card)
//     {
//         const newCard = Dec.peekCard();
//         if(newCard)
//         {
//             settopCard(new card(newCard.suit,newCard.rank))
//         }
//     }
// }
// const deckClick = () =>
// {
//     setisClicked(true);
//     console.log(Dec)
//     if(Dec.rear >= 0) {
//     const newCard = Dec.popCard();
//     if(newCard)
//     {
//         settopCard(new card(newCard.suit,newCard.rank))
//         Dec.pushCard(newCard)
//         console.log(newCard)
//     }
//     else
//     {
//         console.log("no more cards in the deck")
//     }
//     }
//     else
//     {
//         console.log("I wont work")
//     }
    
// }
const HandleDragStart = (event,card) => 
{
    console.log("Deck card is moved")
    event.dataTransfer.setData('card',JSON.stringify(card))
}
  return (
    <div className='w-[25%] h-[95%] border-gray-800 rounded-md  flex flex-row justify-center items-center gap-10'>
        <div className='w-[37%] h-[95%] bg-contain' style={{backgroundImage: `url(${require(`../assets/card-back.png`)})`}} onClick={()=>deckClick()}></div>
        {isClicked && topCard ?
        (<div className='w-[37%] h-[95%]'>
        <Card suit = {topCard.suit} rank = {topCard.rank} faceUp={true} onClick={() => deckClick()} draggable={true} onDragStart={(event) => {HandleDragStart(event,topCard);}} />
        </div>)
        :
        null
        }
        
    </div>
  )
}

export default Deck