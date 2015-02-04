var clickedTime; var createdTime; var reactionTime;

function makeBox() {
	var time=Math.random();
	time=time*1500;
	var rand = Math.random()*100+1;
	setTimeout(function() {
	var link = document.createElement("link");
	link.rel="stylesheet";
	link.type="text/css";
	var head = document.getElementsByTagName("head")[0];
	if (rand<3.57) {		
		link.href="style_square.css";		
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=3.57&&rand<7.14){
		link.href="style_rectangle.css";		
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=7.14&&rand<10.71) {		
		link.href="style_circle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=10.71&&rand<14.28) {		
		link.href="style_ellipse.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=14.28&&rand<17.86) {		
		link.href="style_uptriangle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=17.86&&rand<21.43) {		
		link.href="style_downtriangle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=21.43&&rand<25) {		
		link.href="style_lefttriangle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=25&&rand<28.57) {		
		link.href="style_righttriangle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=28.57&&rand<32.14) {		
		link.href="style_leftuptriangle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=32.14&&rand<35.71) {		
		link.href="style_rightuptriangle.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=35.71&&rand<39.28){
		link.href="style_parallelogram.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=39.28&&rand<42.86){
		link.href="style_trapezoid.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=42.86&&rand<46.43){
		link.href="style_6star.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=46.43&&rand<50){
		link.href="style_5star.css";
		head.replaceChild(link,head.lastChild);
	} else if (rand>=50&&rand<53.57){
		link.href="style_pentagon.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=53.57&&rand<57.14){
		link.href="style_hexagon.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=57.14&&rand<60.71){
		link.href="style_octagon.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=60.71&&rand<67.86){
		link.href="style_heart.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=67.86&&rand<71.43){
		link.href="style_infinity.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=71.43&&rand<75){
		link.href="style_egg.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=75&&rand<78.57){
		link.href="style_eat.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=78.57&&rand<82.14){
		link.href="style_message.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=82.14&&rand<85.71){
		link.href="style_12star.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=85.71&&rand<89.28){
		link.href="style_8star.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=89.28&&rand<92.86){
		link.href="style_diamond.css";
		head.replaceChild(link,head.lastChild);	
	} else if (rand>=92.86&&rand<=100){
		link.href="style_yinyang.css";
		head.replaceChild(link,head.lastChild);	
	}
	var top=Math.random();
	top=top*300;
	var left=Math.random();
	left=left*600;
	document.getElementById("box").style.top=top+"px";
	document.getElementById("box").style.left=left+"px";
	document.getElementById("box").style.display="block";
	createdTime=Date.now();
	}, time);
}

document.getElementById("box").onclick=function() {
	clickedTime=Date.now();
	reactionTime=(clickedTime-createdTime)/1000;
	document.getElementById("time").innerHTML=reactionTime;
	this.style.display="none";
	makeBox();
}

makeBox();