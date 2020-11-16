class Mango {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.mangoImage = loadImage("sprites/mango.png");

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x, this.y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.mangoImage, 0, 0, this.r*2, this.r*2);
        pop();
    }
}