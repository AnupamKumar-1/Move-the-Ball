var ball=document.getElementById("ball");
var area = document.getElementById("ground");
 ball.style.top=ball.offsetTop+"px";
 ball.style.left=ball.offsetLeft+"px";
 
 var ballHeight=ball.offsetHeight;
 var ballWidth=ball.offsetWidth;


window.addEventListener("keydown", function (event) {
   let top=parseInt(ball.style.top);
    let left=parseInt(ball.style.left);
    //if w is pressed
    if(event.key=='w'||event.key=='W'){
        if(top>7){
            ball.style.top=top-30+ 'px';
        }
    }
    //A is pressed
    else if(event.key=='a'||event.key=='A'){
        if(left>7){
            ball.style.left=left-30+ 'px';
        }
    }
    // S is pressed
    else if(event.key=='s'||event.key=='S'){
        if(top<(window.innerHeight-ballHeight)-100){
            ball.style.top=top+30+ 'px';
        }
    }
    else if(event.key=='d'||event.key=='D'){
        if(left<(window.innerWidth-ballWidth)-90){
            ball.style.left=left+30 +'px';
        }
    }
     else {
	 alert("Only W A S D are allowed !!");	
	}
 });



