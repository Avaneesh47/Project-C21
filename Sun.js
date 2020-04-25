class Sun{
    constructor(x,y,radius){
        var options = {
            isStatic : true
        }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.x = x;
    this.y = y;

    World.add(world1,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("yellow");
        circle(pos.x,pos.y,this.radius);
    }
};