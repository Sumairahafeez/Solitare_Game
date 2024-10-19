import Card from './card.js'
class Deck
{
    constructor()
    {   this.top = 0;
        this.cards = [];
        this.Suit = ['heart','diamond','club','spade']
        this.Ranks = ['A','2','3','4','5','6','7','8','9','J','Q','K']
        this.initializeDeck();
    }
    pushCard = (Card) =>{
        if (this.top >= 52)
        {
            console.log("Unable to push cards exceeded the length");
        }
        else
        {
            this.cards[this.top] = Card;
            console.log("cards pushed in the deck")
            this.top++;
        }
    }
    popCard = () => 
    {
        if(this.top == 0)
        {
            console.log("No card in the Deck");
        }
        else
        {
            this.top -=1;
            let Lastcard = this.cards[this.top];
            console.log(Lastcard)
            return Lastcard;
        }
    }
    initializeDeck = () =>
        {
            for(let suit of this.Suit)
            {
                for(let rank of this.Ranks)
                {
                    this.pushCard(new Card(suit,rank));
                }
            }
        }
    shuffleDeck = () =>{
        for(let i = this.cards.length-1; i>0; i--)
        {
            const j = Math.floor(Math.random()*(i+1));
            [this.cards[i],this.cards[j]] = [this.cards[j],this.cards[i]];
        }
    } 
    DisplayCards = () =>
    {
        this.cards.forEach(card => {
           console.log(card.toString()); 
        });
    }
}
export default Deck;
// const deck = new Deck();
// console.log('Deck before shuffle:');
// deck.DisplayCards();
// deck.shuffleDeck();
// console.log('\nDeck after shuffle:');
// deck.DisplayCards();
