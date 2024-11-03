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
            // Initialize the TableuPiles with cards from the deck
            for (let i = 0; i < 7; i++) {
                this.TableuPiles[i] = new Stack();
                for (let j = 0; j <= i; j++) {
                    this.TableuPiles[i].push(this.deck.popCard());
                    console.log(this.TableuPiles[i].GetCards())
                }
            }
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