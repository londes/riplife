// creates canvas element, size of the window object.
var monkaCanvas=document.createElement("canvas");
monkaCanvas.id="monka-canvas";
monkaCanvas.height=window.innerHeight;
monkaCanvas.width=window.innerWidth;
var ctx = monkaCanvas.getContext("2d");

var amountOfMonkaS = 4;
monkaDrawer(ctx, amountOfMonkaS);

function getOnloadFunction(img, xpos, ypos) {
  return function drawInContext() {
    console.log("xpos: " + xpos +", canvas width: " + monkaCanvas.width + "");
    console.log("ypox: " + ypos +", canvas height: " + monkaCanvas.height + "");
    console.log(img);
    console.log("---------------------------");
    ctx.drawImage(img, xpos, ypos);
  }
}

function monkaDrawer(ctx,amountOfMonkaS) {
  var whichMonka = 0;

  for (i=0; i<amountOfMonkaS; i++) {
    var monkaS=document.createElement("img");
    monkaS.id="monka-" + whichMonka + "";
    monkaS.alt="shheeeeeeee";
    // monkaS.height=""+ 168*Math.random() + "";
    // monkaS.width="" + 304*Math.random() + "";
    monkaS.height="168";
    monkaS.width="304";

    randXPos= window.innerWidth*Math.random();
    randYPos= window.innerHeight*Math.random();

    monkaS.onload = getOnloadFunction(monkaS,10,10);
    monkaS.src="/img/TrymOlU.jpg";
    whichMonka++;
    // monkaS.height="168";
    // monkaS.width="304";
  }
}

window.onload = function() {
  document.body.appendChild(monkaCanvas);
}

// creates amountOfMonkaS monka image elements of random size and appends them to the canvas element
