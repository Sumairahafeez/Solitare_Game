import { useEffect, useState } from 'react';
import React from 'react'
import table from '../Backend/Tableu.js';
import Stack from '../Backend/Stack.js';
import Card from './Card.jsx';
import card from './Card.jsx';
import Tableu from '../Backend/Tableu.js';
import LinkedList from '../Backend/LinkedList.js';
import TableuList from './TableuList.jsx';
import Deck from './Deck.jsx';
import Validation from '../Backend/Validtaion.js';
function Tablu({tableu , Dec , removeCardFromDec}) {
    const [tab,setTab] = useState([])
    const [drag,setdrag] = useState(false)
    console.log("Dec in tableu",Dec)
    useEffect(() => {
      setTab([...tableu.TableuPiles])
    }, [tableu.TableuPiles])
    const handleDragStart = (event, card, fromPileIndex) => {
        console.log("Hande drag start i sbeing called")
        event.dataTransfer.setData('card', JSON.stringify(card));
        event.dataTransfer.setData('fromPileIndex', fromPileIndex.toString());
        console.log("Dragging card:", card, "from pile index:", fromPileIndex);
      };
    const handleDrop = (event,toPileIndex) => 
    {   event.preventDefault()
        console.log("Handle drop is called")
        try{
            const cardData = event.dataTransfer.getData('card');
            if(!cardData)
            {
                console.log('In valid Card');
            }
            // else
            {
            const card = JSON.parse(cardData);
            if(card)
            {
                
                  // console.log('I am in the drop function',card)
                const fromPileIndex = parseInt(event.dataTransfer.getData('fromPileIndex'));
                console.log("pileIndex",fromPileIndex)
                if(fromPileIndex>=0)
                {   
                    const draggedCard = tableu.TableuPiles[fromPileIndex].peek();
                    console.log("Dragged card",draggedCard)
                    if(tableu.moveCard(draggedCard,toPileIndex))
                    {   
                        tableu.TableuPiles[fromPileIndex].pop();
                        const updateTab = [...tableu.TableuPiles]
                        updateTab[toPileIndex] = tableu.TableuPiles[toPileIndex].list;
                        setTab(updateTab);
                        tableu.flipTopCard(fromPileIndex);
                    }  
                }
                else
                {
                   if(tableu.moveCard(card,toPileIndex))
                   {
                    console.log(Dec,"deck after moving")
                    removeCardFromDec();
                    // Deck.removeCardFromDec();
                    const updateTab = [...tableu.TableuPiles]
                    updateTab[toPileIndex] = tableu.TableuPiles[toPileIndex].list;
                    setTab(updateTab);
                   }
                   
                }
                // tableu.flipTopCard(fromPileIndex);
               }
        }
    }
    catch(error)
    {
        console.log("Error in handle drop",error)
    }
       
    }
    const HandleDragOver = (event) => {
        console.log("Handle drag over is called")
        event.preventDefault();
    }
    const renderPile =(pile,pileIndex) =>
    {   const cardsToShow = pile.GetCards();
        return(
            <>
          <div key={pileIndex} className='relative w-full h-full' onDrop = {(event) => handleDrop(event,pileIndex)} onDragOver={HandleDragOver}>
          {cardsToShow.map((card, cardIndex) => (
            
             <div key={cardIndex} className='absolute' style={{ top: `${cardIndex * 30}px` }}>
                {console.log(cardIndex)}
                <Card
                            suit={card.suit}
                            rank={card.rank}
                            faceUp={card.faceUp} 
                            draggable = {true}
                            onDragStart = {(event)=>{handleDragStart(event,card,pileIndex)}}
                        />
                    </div>
          ))}
      </div>
      {/* {drag ?
                    <TableuList list={tableu.TableuPiles[pileIndex].list} pileIndex={pileIndex}/>
                : null} */}
    </>
        )
            }
    if (!tableu.TableuPiles || !tableu) {
      return null; // or you can return a loading indicator
  }

  return (
    
    <div className='flex flex-row px-20 justify-center items-start gap-5'>
      {console.log(tableu.TableuPiles)}
            {tableu.TableuPiles.map((pile, pileIndex) => (
                <div key={pileIndex} className=' relative w-[12%] h-52 rounded-md flex flex-col items-center'>
                    {
                    renderPile(pile, pileIndex)}
                    
                </div>
            ))}
        </div>
  )
}

export default Tablu