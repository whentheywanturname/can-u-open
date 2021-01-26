class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        
        polygon = Bodies.circle(50,200,20);
        this.polygon = Constraint.create(options);
        World.add(world,polygon)

        slingShot = new SlingShot(this.polygon,{x:100,y:200});
       this.shape=loadImage("polygon.png");
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
            push(); 
            pop();
        }
    }
    
