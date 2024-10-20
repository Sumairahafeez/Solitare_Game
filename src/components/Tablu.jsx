import React from 'react'
import tableu from '../Backend/Tableu.js';
import Card from './Card.jsx';
function Tableu({tableu}) {
    const renderPile =(pile,pileIndex) =>
    {
        return(
          <div key={pileIndex} className='flex flex-col items-center'>
          {pile.map((card, cardIndex) => (
              <Card
                  key={cardIndex}
                  suit={card.suit}
                  rank={card.rank}
                  faceUp={cardIndex === pile.length - 1} // Only the last card is face-up
              />
          ))}
      </div>
        )
    }
  //   if (!tableu.TabluePiles || !tableu) {
  //     return null; // or you can return a loading indicator
  // }

  return (
    // <div className='flex flex-row px-20 justify-center items-start gap-5'>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>
    //     </div>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>cards</div>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>cards</div>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>cards</div>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>cards</div>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>cards</div>
    //     <div className='w-[12%] h-52 border border-gray-700 rounded-md'>cards</div>
    // </div>
    
    <div className='flex flex-row px-20 justify-center items-start gap-5'>
      {console.log(tableu.TabluePiles)}
            {tableu.TabluePiles.map((pile, pileIndex) => (
                <div key={pileIndex} className='w-[12%] h-52 border border-gray-700 rounded-md flex flex-col items-center'>
                    {renderPile(pile, pileIndex)}
                </div>
            ))}
        </div>
  )
}

export default Tableu