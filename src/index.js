const ctx1 = document.getElementById("c1").getContext("2d");
const ctx2 = document.getElementById("c2").getContext("2d");
const ctx3 = document.getElementById("c3").getContext("2d");
const ctx4 = document.getElementById("c4").getContext("2d");
const eTransformInput = {
	a:document.getElementById("a"),
	b:document.getElementById("b"),
	c:document.getElementById("c"),
	d:document.getElementById("d"),
	e:document.getElementById("e"),
	f:document.getElementById("f")
}
const eTransformValue = {
	a:document.getElementById("aval"),
	b:document.getElementById("bval"),
	c:document.getElementById("cval"),
	d:document.getElementById("dval"),
	e:document.getElementById("eval"),
	f:document.getElementById("fval")
}
var transformValue = [0,0,0,0,0,0],varId = "abcdef";
function updateInputValue(el = "a",e = new Event("input")){
	eTransformValue[el].innerHTML = e.target.value;
	transformValue[varId.indexOf(el)] = e.target.value;
	transform(ctx4,transformValue);
}

function transform(ctx,trVal){
	ctx.save();
	ctx.fillStyle = "#0008";
	ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2);
	ctx.transform(trVal[0],trVal[1],trVal[2],trVal[3],trVal[4],trVal[5]);
	ctx.fillRect(0,0,50,50);
	ctx.restore();
}

eTransformInput.a.addEventListener("input",updateInputValue.bind(this,"a"));
eTransformInput.b.addEventListener("input",updateInputValue.bind(this,"b"));
eTransformInput.c.addEventListener("input",updateInputValue.bind(this,"c"));
eTransformInput.d.addEventListener("input",updateInputValue.bind(this,"d"));
eTransformInput.e.addEventListener("input",updateInputValue.bind(this,"e"));
eTransformInput.f.addEventListener("input",updateInputValue.bind(this,"f"));

function genFiboNum(t){
	var fibo = [] ,n=1,a=1,b=1,c=0;
	for(; n <= t;n++){
		var o = 0;
		if(n % 3 == 0)o=c=a+b;
		if(n % 3 == 1)o=a=c+b;
		if(n % 3 == 2)o=b=a+c;
		fibo.push(o);
	}
	return fibo;
}
var fibo = genFiboNum(1000)

function drawFibo(ctx){
	for(let pos = 0,c = 0,an=0;pos <= ctx.canvas.width;pos+=3,c++,an+=0.01){
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.moveTo(ctx.canvas.width/2,ctx.canvas.height/2);
		ctx.lineTo(0,fibo[c]);
		ctx.rotate(an);
		if(an >= 6.3)an = 0;
		ctx.stroke();
	}
}

drawFibo(ctx1);

function radar(ctx){
	var w = ctx.canvas.width,h = ctx.canvas.height,int,an=0,posList = [];
	function drawRay(){
		drawGrid(ctx,50,50);
		ctx.beginPath();
		ctx.strokeStyle = "#0f0";
		ctx.lineWidth = 2
		ctx.moveTo(w/2,h/2);
		ctx.lineTo((w/2)+(Math.cos(an)*(w/2)),(h/2)+(Math.sin(an)*(h/2)));
		ctx.moveTo(w,h/2);
		ctx.arc(w/2,h/2,h/2,0,Math.PI*2,true);
		ctx.stroke();
		ctx.fillStyle = "#0002";
		ctx.fillRect(0,0,w,h);
		if(an >= 360)clearInterval(int);
		an+=0.01;
	}
	int = setInterval(drawRay,0)
}

window.requestAnimationFrame(radar.bind(this,ctx2));

function bwGrid(ctx){
//	console.log(ctx.canvas);
	let x =0 ,y= 0,int;
	function drawRectX(){
		ctx.beginPath();
//		console.log(x,y);
		if(x%2 == y%2)ctx.fillRect(x,y,1,1);
		if(x <= ctx.canvas.width)x++
			else if(y <= ctx.canvas.height)x=0,y++;
		if(x==ctx.canvas.width && y == ctx.canvas.height)clearInterval(int);
		setTimeout(drawRectX,0);
	}
	int = setInterval(drawRectX,0);
}

//window.requestAnimationFrame(bwGrid.bind(this,ctx3));


function drawGrid(ctx,w=10,h=10){
	ctx.beginPath();
	ctx.strokeStyle = '#080';
	ctx.lineWidth='1px';
	for(let x = 0 ;x<= ctx.canvas.width;x+=w){
		ctx.moveTo(0,x);
		ctx.lineTo(ctx.canvas.width,x);
	}
	for(let y=0;y<=ctx.canvas.height;y+=h){
		ctx.moveTo(y,0);
		ctx.lineTo(y,ctx.canvas.height);
	}
	ctx.stroke();
}
