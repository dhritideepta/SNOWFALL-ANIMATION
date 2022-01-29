class Snow{
    constructor(r){
        var option = {
            density:0.02,
            restitution:0.1,
            airFriction:50
        }
        this.body=Bodies.rectangle(random(10,790),random(-400,-5),r,r,option)
        this.snow1=loadImage ("snow4.webp");
        this.snow2=loadImage ("snow5.webp");
        World.add(world,this.body)
        this.radius=r
    }
    display(){

        var pos = this.body.position;
        var rand =Math.round(random(1,2))
        switch (rand){
            case 1:image(this.snow1,pos.x,pos.y,this.radius,this.radius)
            break;
            case 2 :image(this.snow2,pos.x,pos.y,this.radius,this.radius)
            break;
            default : break;

        }

    }

}