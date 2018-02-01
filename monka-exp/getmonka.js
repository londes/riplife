// creates canvas element, size of the window object.
var monkaCanvas=document.createElement("canvas");
monkaCanvas.id="monka-canvas";
monkaCanvas.height=window.innerHeight;
monkaCanvas.width=window.innerWidth;
var ctx = monkaCanvas.getContext("2d");
document.body.appendChild(monkaCanvas);

var amountOfMonkaS = 30;
monkaDrawer(ctx, amountOfMonkaS);

function monkaDrawer(ctx,amountOfMonkaS) {
  var whichMonka = 0;

  for (i=0; i<amountOfMonkaS; i++) {
    var monkaS=document.createElement("img");
    monkaS.id="monka-" + whichMonka + "";
    monkaS.alt="shheeeeeeee";
    monkaS.src="/img/TrymOlU.jpg";
    
    monkaS.height=""+ 168*Math.random() + "";
    monkaS.width="" + 304*Math.random() + "";

    randXPos= window.innerWidth*Math.random();
    randYPos= window.innerHeight*Math.random();

    monkaS.onload = getOnloadFunction(monkaS,randXPos,randYPos,monkaS.height,monkaS.width);
    whichMonka++;
  }
}

function getOnloadFunction(img, xpos, ypos, imgHeight, imgWidth) {
  return function drawInContext() {
    console.log("xpos: " + xpos +", canvas width: " + monkaCanvas.width + "");
    console.log("ypox: " + ypos +", canvas height: " + monkaCanvas.height + "");
    console.log(img);
    console.log("---------------------------");
    ctx.drawImage(img, xpos, ypos,imgHeight,imgWidth);
  }
}

// creates amountOfMonkaS monka image elements of random size and appends them to the canvas element
