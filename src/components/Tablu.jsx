import React from 'react'
import tableu from '../Backend/Tableu.js';
import Card from './Card.jsx';
import card from './Card.jsx';
function Tablu({ tableu }) {
    const renderPile =(pile,pileIndex) =>
    {   const cardsToShow = pile.GetCards();
        return(
          <div key={pileIndex} className='relative w-full h-full'>
          {cardsToShow.map((card, cardIndex) => (
            
             <div key={cardIndex}
                  className='absolute'
                  style={{ top: `${cardIndex * 30}px` }} // Adjust the offset as needed
            >
                {console.log(cardIndex)}
                <Card
                            suit={card.suit}
                            rank={card.rank}
                            faceUp={cardIndex === cardsToShow.length - 1} // Only the last card is face-up
                        />
                    </div>
          ))}
      </div>
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