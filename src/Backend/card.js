class Card
{
    constructor(suit,rank)
    {
        this.suit = suit;
        this.rank = rank;
        this.faceUp = false;
    }
    flip()
    {
        this.faceUp = !this.faceUp;
    }
    toString()
    {
        if(this.faceUp)
        {
              return `${this.rank} of ${this.suit} faceup`;
        }
        else
        {
              return `${this.rank} of ${this.suit} having facedown`;
        }
      
    }
}
export default Card