const ctx1 = document.getElementById("c1").getContext("2d");
const ctx2 = document.getElementById("c2").getContext("2d");
const ctx3 = document.getElementById("c3").getContext("2d");

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
var fibo = genFiboNum(500)

function drawFibo(ctx){
	for(let pos = 0,c = 0,an=0;pos <= ctx.canvas.width;pos+=3,c++,an+=1){
		ctx.lineWidth=1;
		ctx.save();
		ctx.beginPath();
		ctx.translate(ctx.canvas.width/2,ctx.canvas.height/2)
		ctx.rotate((Math.PI/180)*an);
		ctx.moveTo(0,fibo[c-1]/500??0);
		ctx.lineTo(0,fibo[c]/500);
		if(an >= 360)an = 0;
		ctx.stroke();
		ctx.restore();
	}
}

function rotateRay(ctx){
	var deg = 0,x=ctx.canvas.width/2,y=ctx.canvas.height/2,int;
	function drawRay(){
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#f00";

		ctx.save();
		ctx.translate(x,y)
		ctx.rotate((Math.PI/180)*deg);
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(deg,deg);
		ctx.stroke();
		if(deg <= 360)deg++
			else clearInterval(int);
		ctx.restore();

	}
	var int = setInterval(drawRay,10);
}

window.requestAnimationFrame(drawFibo.bind(this,ctx1));;
rotateRay(ctx1);

window.requestAnimationFrame(radar.bind(this,ctx2));

function bwGrid(ctx){
	let x =0 ,y= 0,int;
	function drawRectX(){
		ctx.beginPath();
		if(x%2 == y%2)ctx.fillRect(x,y,1,1);
		if(x <= ctx.canvas.width)x++
			else if(y <= ctx.canvas.height)x=0,y++;
		if(x==ctx.canvas.width && y == ctx.canvas.height)clearInterval(int);
		setTimeout(drawRectX,0);
	}
	int = setInterval(drawRectX,0);
}

window.requestAnimationFrame(bwGrid.bind(this,ctx3));
window.requestAnimationFrame(bwGrid.bind(this,ctx1));
