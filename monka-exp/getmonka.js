// creates canvas element, size of the window object.
var monkaCanvas=document.createElement("canvas");
monkaCanvas.id="monka-canvas";
monkaCanvas.height=window.innerHeight;
monkaCanvas.width=window.innerWidth;
ctx = monkaCanvas.getContext("2d");

// creates X monka image elements of random size and appends them to the canvas element

var amountOfMonkaS = 20;
for (i=0; i<amountOfMonkaS; i++) {
  var whichMonka = 0;
  var monkaS=document.createElement("img");
  monkaS.id="monka-" + whichMonka + "";
  monkaS.src="/img/TrymOlU.jpg";
  monkaS.alt="shheeeeeeee";
  //randHeight= "" + 1080*Math.random() + "";
  //randWidth= "" + 1920*Math.random() + "";
  randXPos= window.innerWidth*Math.random();
  randYPos= window.innerHeight*Math.random();
  monkaS.height=""+ 168*Math.random()+ "";
  monkaS.width="" + 304*Math.random()+ "";
  ctx.drawImage(monkaS,randXPos,randYPos,monkaS.width,monkaS.height);
  whichMonka++;
}

document.body.appendChild(monkaCanvas);
document.body.appendChild(monkaS);
whichMonka++;
