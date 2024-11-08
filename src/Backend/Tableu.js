import Stack from "./Stack";
import Card from "./card";
import Deck from "./Deck";
import LinkedList from "./LinkedList";
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
                    let card = this.deck.popCard();
                    if(j==i)
                    {
                        card.faceUp = true;
                    }
                    this.TableuPiles[i].push(card);
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
    flipTopCard(fromPileIndex) {
        const pile = this.TableuPiles[fromPileIndex];
        if (pile.size() > 0) {
            const topCard = pile.peek();
            topCard.faceUp = true;
        }
    }
    
    isValidMove(card, ToPile)
    {
        const topCard = ToPile.peek();
        const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        if (topCard == null) {
            if (card.rank === 'K') {
                return true;
            }
        }
        else
        {   
            let cardRankIndex = ranks.indexOf(card.rank);
            let topCardRankIndex = ranks.indexOf(topCard.rank);
            if (topCardRankIndex- 1 === cardRankIndex) {
                return true;
            }
        }
    }
    moveCard(Card, toPileIndex)
    {
        Card.faceUp = true;
        const ToPile = this.TableuPiles[toPileIndex];
        if(this.isValidMove(Card,ToPile))
        {
            ToPile.list.insertData(Card);
            ToPile.push(Card);
            console.log(ToPile)
            console.log(ToPile.list.retrieveWholeList())
            return true;
        }
        else
        {
            console.log("Invalid Move")
        }
       
        return false;
    }
}
export default Tableu