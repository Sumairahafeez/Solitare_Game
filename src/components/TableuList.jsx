import React from 'react'
import Card from './Card';
function TableuList({list},{pileIndex}) {
    const cardsToShow = list.retrieveWholeList();   
    return (
      <div key={pileIndex} className='relative w-full h-full'>
        {cardsToShow.map((card, cardIndex) => (
          <div key={cardIndex} className='absolute' style={{ top: `${cardIndex * 27}px` }}>
            <Card
              suit={card.suit}
              rank={card.rank}
              faceUp={true}
              draggable={true}
            //   onDragStart={(event) => handleDragStart(event, card, pileIndex)}
            />
            {console.log(cardsToShow,"by the list")}
          </div>
        ))}
      </div>
    );
}

export default TableuList