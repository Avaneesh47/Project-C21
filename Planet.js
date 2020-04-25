class Planet{
    constructor(x,y,radius,color1,color2,color3){
       /* var options = {
            isStatic:true
        }*/

        //this.body = Bodies.circle(x,y,radius,options);   
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3; 
        
        //World.add(world1,this.body);
    }
    display(){
        //var pos = this.body.position;
        ellipseMode(CENTER);
        fill(this.color1,this.color2,this.color3);    
        circle(this.x,this.y,this.radius);
    }
};