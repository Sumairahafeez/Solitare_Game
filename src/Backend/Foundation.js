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
        console.log(pile.size(),"pileindex");
        if(pile.size()==0)
        {   
            console.log("Card in foundations",Card)
            if(Card.rank == 'A')
            {
                pile.push(Card);
                console.log("Card inserted in foundation")
                return true;
            }
            else
            {
                console.log("Invalid insertion in foundation")
                return false;
            }
        }
        else
        {
            const TopCard = pile.peek();
            let ranks = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
            let cardIndex = ranks.indexOf(Card.rank);
            console.log(TopCard)
            let foundationRank = ranks.indexOf(TopCard.rank)
            console.log("Card index",cardIndex)
            if(Card.suit === TopCard.suit && cardIndex > foundationRank)
            {
                pile.push(Card);
                console.log("Card inserted in foundation")
                return true;
            }
            else
            {
                console.log("unable to insert card")
                return false;
            }
        }
    }
    victoryCheck = () =>
    {
        let count = 0;
        for(let i =0; i<4; i++)
        {
            for(let j = 0; j<13; j++)
            {
                if(this.foundation[i].size()===13)
                {
                    count++;
                }
            }
        }
        if(count === 4)
            {
                return true;
            }
        return false;
    }
}
export default Foundations