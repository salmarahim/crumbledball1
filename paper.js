class Paper{
constructor(x,y,radius){
var options={
restitution:0.3,
friction:0.5,
density:1.2
}
this.body=Bodies.circle(x,y,radius/2,options);
this.radius=radius/2;
this.image=loadImage("sprites/paper.png");
World.add(world,this.body);

}
display(){
fill("white");
var pos=this.body.position;
imageMode(RADIUS);
image(this.image,pos.x,pos.y,this.radius,this.radius);
}
}