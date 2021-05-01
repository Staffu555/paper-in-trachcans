class paper{
	constructor(x,y,radius)
	{
	// assign options to the rubber ball
	var options = {
		'denisty':1,
		'friction':0.5,
		'restitution':0.8
	}
        this.image = loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.radius=radius;
        
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;
			push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			//draw the ellipse here to display the rubber ball
            imageMode(CENTER);
            image(this.image, 0, 0,50,50);
			pop()
	}

}