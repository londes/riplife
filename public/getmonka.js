// creates canvas element, size of the window object.
var windowSizer=document.getElementsByTagName('body')[0];
console.dir(windowSizer);
var monkaCanvas=document.createElement("canvas");
monkaCanvas.id="monka-canvas";
monkaCanvas.height=document.querySelector('html').offsetHeight;
monkaCanvas.width=windowSizer.clientWidth;
console.log('canvas height: ' +monkaCanvas.height+ ' canvas width: ' +monkaCanvas.width);
var ctx = monkaCanvas.getContext("2d");
document.body.appendChild(monkaCanvas);

var amountOfMonkaS = 200;
monkaDrawer(ctx, amountOfMonkaS);

function monkaDrawer(ctx,amountOfMonkaS) {
  var whichMonka = 0;

  for (i=0; i<amountOfMonkaS; i++) {
    var monkaS=document.createElement("img");
    monkaS.id="monka-" + whichMonka + "";
    monkaS.classList.add('monkaS-head');
    monkaS.alt="shheeeeeeee";
    monkaS.src="/img/TrymOlU.jpg";

    randSize = 0.2+Math.random();

    monkaS.height=""+ 304*randSize + "";
    monkaS.width="" + 168*randSize + "";

    randXPos= window.innerWidth*Math.random();
    randYPos= window.innerHeight*Math.random();

    monkaS.onload = getOnloadFunction(monkaS,randXPos,randYPos,monkaS.height,monkaS.width);
    whichMonka++;
  }
}

function getOnloadFunction(img, xpos, ypos, imgHeight, imgWidth) {
  return function drawInContext() {
    ctx.drawImage(img, xpos, ypos,imgHeight,imgWidth);
  }
}

// creates amountOfMonkaS monka image elements of random size and appends them to the canvas element
