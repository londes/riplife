// creates canvas element, size of the window object.
var monkaCanvas=document.createElement("canvas");
monkaCanvas.id="monka-canvas";
monkaCanvas.height=window.innerHeight;
monkaCanvas.width=window.innerWidth;
var ctx = monkaCanvas.getContext("2d");

// creates X monka image elements of random size and appends them to the canvas element

var amountOfMonkaS = 100;
for (i=0; i<amountOfMonkaS; i++) {
  var whichMonka = 0;
  var monkaS=document.createElement("img");
  monkaS.id="monka-" + whichMonka + "";
  monkaS.src="/img/TrymOlU.jpg";
  monkaS.alt="shheeeeeeee";
  randHeight=;
  randWidth=;
  monkaS.height="84";
  monkaS.width="152";
  ctx.drawImage(monkaS,0,0,monkaS.width,monkaS.height);
  whichMonka++;
}




document.body.appendChild(monkaCanvas);
document.body.appendChild(monkaS);
whichMonka++;
