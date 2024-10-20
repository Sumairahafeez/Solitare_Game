import card from './card.js'
class Node 
{
    constructor()
    {
        this.card = [];
        this.next = null;
    }
}
class Stack
{
    constructor()
    {
        this.top = null;
    }
    push(Card)
    {
        const newNode = new Node();
        newNode.card = Card;
        newNode.next = this.top;
        this.top = newNode;
    }
    size()
    {
        return card.length;
    }
    pop()
    {
        if(this.top == null)
        {
            return null;
            
        }
        const card = this.top.card;
        this.top = this.top.next;
        return card;
    }
    peak()
    {
        console.log(card[this.top]);
    }
    GetCards()
    {
        let current = this.top.card;
        while(current)
        {
            const cards = []
            let current = this.top.card;
            while(current)
            {
                cards.push(current.card);
                current = current.next;
            }
            return cards.reverse();
        }
    }
}
export default Stack