import Deck from "./Deck";
import Tableu from "./Tableu";
class Stockpile
{
    constructor(deck)
    {
        this.deck = deck;
        this.top = 0;
        this.rear = 0;
        this.cards = [];
        this.initializeStockpile();
    }
    initializeStockpile = () =>
    {
        for(let i = 0; i<20; i++)
        {
            this.pushCard(this.deck.popCard());
        }
    }
    pushCard = (Card) =>
    {
        {   console.log(Card)
            this.cards[this.rear] = Card;
            this.rear++;
        }
    }
    popCard = () =>
    {
        if(this.top == this.rear)
        {
            console.log("No more cards in the stockpile");
        }
        else
        {
            let Lastcard = this.cards[this.top];
            this.top +=1;
            return Lastcard;
        }
    }
}
export default Stockpile