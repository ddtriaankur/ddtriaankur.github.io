var count = 0;
function setup() {
  var cat = document.getElementById("cat");
  cat.mousePressed(doSomething);
 createP(count);
 
}

function doSomething(){
  count++;
}
