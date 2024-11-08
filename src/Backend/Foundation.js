import Stack from "./Stack";

class Foundations
{
    constructor()
    {
        this.foundation = [new Stack(), new Stack(), new Stack(), new Stack()];
    }
    insertCard(Card,foundationIndex)
    {
        const pile = this.foundation[foundationIndex];
        if(pile.size()==0)
        {
            if(Card.rank == 'A')
            {
                pile.push(Card);
                console.log("Card inserted in foundation")
            }
            else
            {
                console.log("Invalid insertion in foundation")
            }
        }
        else
        {
            const TopCard = pile.peek();
            let ranks = ['A','1','2','3','4','5','6','7','8','9','J','Q','K'];
            let cardIndex = ranks.indexOf(Card.rank);
            let foundationRank = ranks.indexOf(TopCard.rank)
            if(Card.suit == TopCard.suit && cardIndex > foundationRank)
            {
                pile.push(Card);
                console.log("Card inserted in foundation")
            }
            else
            {
                console.log("unable to insert card")
            }
        }
    }
}
export default Foundations