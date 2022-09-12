const ctx1 = document.getElementById("c1").getContext("2d");
const ctx2 = document.getElementById("c2").getContext("2d");

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

console.log(genFiboNum(100))
