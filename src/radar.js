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
