import Stack from "./Stack";
import Card from "./card";
import Deck from "./Deck";
class Tableu {
    constructor(deck) {
        this.TableuPiles = [new Stack(), new Stack(), new Stack(), new Stack(), new Stack(), new Stack(),new Stack()]
        this.deck = deck; 
    }
    initializeTableu()
    {
        let cardsToDraw = 1;
        for(let i=0; i<this.TableuPiles.length; i++)
        {
            for(let j = 0; j<cardsToDraw; j++)
            {
                const card = this.deck.popCard();
                this.AddCardToPile(i,card);
            }
            cardsToDraw++;
            console.log("Tableu is initialized")
        }
        this.TableuPiles.forEach(pile => {
            if(pile.size()>0)
            {
                pile.peak();
                console.log("I am present in TableuPiles")
                // card.flip();
            }
        });
        
    }
    AddCardToPile(pileIndex,Card)
    {
        const pile = this.TableuPiles[pileIndex];
        const maxCards = pileIndex+1;
        if(pile.size()<=maxCards)
        {
            pile.push(Card);
            console.log(`Card inserted in tableu at ${pileIndex}`)
        }
        else
        {
            console.log(`${pileIndex} cannot store more than ${maxCards} cards`)
        }
    }
    moveCard(fromPileIndex, toPileIndex)
    {
        const card = this.TableuPiles[fromPileIndex].pop();
        const ToPile = this.TableuPiles[toPileIndex];
        const maxSize = toPileIndex+1;
        if(card && ToPile.size()<maxSize)
        {
            this.TableuPiles[toPileIndex].push();
        }
        else
        {
            console.log(`The pile cannot hold more cards`);
        }
    }

}
export default Tableu