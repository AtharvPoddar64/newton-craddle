class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
        stroke("white");
       line(this.sling.bodyA.x,this.sling.bodyA.y,this.pointB.x,this.pointB.y);
    }
    
}
