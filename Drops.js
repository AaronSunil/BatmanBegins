class Drops
{
    constructor(x,y)
    {
        this.rain = null;
    }

    update()
    {
        if(this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain,  {x:random(0,400), y:random(0,400)})
        }
    }

    display()
    {
        ellipse(this.rain.position.x, this.rain.position.y, 200,200)
    }
}