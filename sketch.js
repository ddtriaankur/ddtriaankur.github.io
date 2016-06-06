var cat,button, line
var number = 0;

function setup() {
  createElement('h1', 'A Cat Clicker Web Application')
  // createElement('p', "Click the cat image below and you will see the number of time with each increment." )
  cat = createImg('https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426')
  
  button = createButton("Click here")
  button.mousePressed(increment);
  // cat.mousePressed(increment);
	line = createP("Number of time you have clicked you cat is 0 " );


}

function increment(){
	line.html("Number of time you have clicked you cat is " + number++);

}

function draw() {

if (button.mouseIsPressed){
	console.log('asdkaskdjhaskdjhaskdhaskjh')
}
  
}
