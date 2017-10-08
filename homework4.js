// USEFUL FUNCTIONS
const stars = function(n){
	if(isNaN(n)|| n<= 0) return "";
	
	return "*" + stars (n-1)
}

const spaces = function(n){
	if(n<= 0) return "";
	return " " + spaces (n-1);
}

const starSpace = function(n){
	if(n===1) return "* ";
	if(n<= 0) return "";
	return starSpace(n-1)+"* ";
}






// ACTUAL HOMEWORK FUNCTIONS

// Write a function that returns some power of some base
const pow = function (base, power){
	if (power===1) return base;
	if (power === 0) return 1;
	return base*pow(base,power-1)
}



const reverse= function(word){
	
	


const rev = function (str, i){
		if(i<0) return "";
		
	return str[i] + rev(str,i-1);
	}


	return rev(word,word.length-1);
}




// Write a function that return the reverse of a string 

//Create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.
const drawTriangle = function (n){
	const drawTAngle=function (limit, space){
	if(space>limit/2) return;
	
	console.log(spaces(space) + stars(limit-2*space));
	drawTAngle(limit,space+1);
}
	drawTAngle(2*n-1,0)
}


/// Two different functions with the same result - drawing checkerBoard
/// 
const drawChessboard =function (n){
	const drawChesslines=function(n,counter,isStar){
	if(counter<1) return;
	if(isStar) console.log(starSpace(n));
		else console.log(" "+starSpace(n));
	drawChesslines(n,counter-1,!isStar);
};
	
	
	if(n<=0) return;
	//console.log(starSpace(n/2,""));
	drawChesslines(n,n,true);
	//drawChessboard(n-1);
	
};




 drawCheckerboard =function (n){
	const checkers = function (n,str){
	if(n<=0) return;
	console.log(str);
	
	checkers(n-1,reverse(str))
}
	
	checkers(n,starSpace(n));
}





//
// DRAW LODKA
//


const drawSpaseStarSeq =function (sp1,sp2, length,height , shift){
	if(height <=0) {	console.log(spaces(shift) +spaces(sp1) + starSpace(length/2-sp1)); return;}
	//console.log(spaces(sp1)+"*"+spaces(sp2)+"*")
	console.log(spaces(shift)+	spaces(sp1)+"*"+"%c"+spaces(sp2)+"%c*","background:#654321;","")
	drawSpaseStarSeq(sp1+1,sp2-2,length,height-1, shift)
}


const drawRightangle = function(distance, startX , shift){
	if(distance <= startX) return;
	
	console.log(spaces(shift)+	spaces(distance-startX-1) + "*"+"%c"+spaces(startX)+"%c*","background:rgba(230,230,250,0.5)","");
	drawRightangle(distance,startX+2, shift);
}

const Lodka = function(n, shift){
	if (n<20) {Lodka(20); return;}
	if(isNaN(shift)){Lodka(n,0); return;}
	//const polDistance = n*2;
	const length = n*2;
	//const polDistance = length*2/3;
	const polDistance =(n*4/5 - 5)*2
	//const flag = n*3/10;
	//const flag = n/2
	const flag =spaces(shift) + spaces(polDistance) +"*"+"%c"+spaces(length/3);
	//DRAW FLAG
	console.log(flag,"background:red");
	console.log(flag,"background:blue");
	console.log(flag,"background:orange");
	
	//DRAW POLL
	//
	console.log(spaces(shift)+	spaces(polDistance)+"*")
	drawRightangle(polDistance,0, shift);
	//DRAW BODY
	console.log(spaces(shift)+	starSpace(length/2) +"*");
	
	//debugger;
	drawSpaseStarSeq(0,length-2,length,length/10 , shift)
	// 4 + rightAngle = polDistance + 1 + length /10=n*3/10             =  n
	// length = (n-5)/2
	//
	
	// Height = 5(flag and star) + length/10(body) + polDistance
	// Height = 5(flag and star) + n/5(body) + polDistance
	// pol = 4n/5 -5
}









const animate = function (n, m , timer)
{
	if(m<0) return;
	setTimeout(function() {console.clear(); Lodka(n,m)} , timer*500);
	animate (n,m-1, timer+1);
}


const drawMovingSailboat = function (n)
{
	animate(n,50,0);
}




//Lodka(30, 10);
//animate (20,50,0)
drawMovingSailboat(20)




































