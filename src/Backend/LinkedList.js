import Card from "./card";
class Node
{
    constructor(card)
    {
        this.card = card;
        this.next = null;
    }
}
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    insertData = (card) =>{
        let current;
        if(this.head === null)
        {
            this.head = new Node(card);
        }
        else
        {
            current = this.head;
            while(current.next)
            {
                current = current.next;
            }
            current.next = new Node(card);
        }
    }
    display = () =>
    {
        let current = this.head;
        while(current)
        {
            console.log(current.card.toString());
            current = current.next;
        }
    }
    retrieveWholeList = () =>
    {
        let current = this.head;
        let list = [];
        while(current)
        {
            list.push(current.card);
            current = current.next;
        }
        return list;
    }
    retrieveFromSpecificIndex = (index)=>{
        let current = this.head;
        let count = 0;
        while(current.next && count < index)
        {
            current = current.next;
            count++;
        }
        let cards = [];
        let indexCard = current.next;
        current.next = null;
        while(indexCard)
        {
            cards.push(indexCard.card);
            indexCard = indexCard.next;
        }
        return cards;
    }
}
export default LinkedList