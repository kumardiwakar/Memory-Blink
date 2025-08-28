let startButton=document.getElementById("StartButton");
let subHead=document.getElementById("level");
let condition = true; 
let userGen=[];
let computerGenerated=[];
let level=0;
let startGame=false;
function userblink(num){
    let btn=document.getElementById(num);
    btn.style.backgroundColor = "white";
    setTimeout(function(){
       if(num==0)btn.style.backgroundColor = "red";
        else if(num==1)btn.style.backgroundColor = "green";
        else if(num==2)btn.style.backgroundColor = "yellow";
        else if(num==3)btn.style.backgroundColor = "purple";
    },1000);
}

function computrblink(num){
    let btn=document.getElementById(num);
    btn.style.backgroundColor = "black";
    setTimeout(function(){
       if(num==0)btn.style.backgroundColor = "red";
        else if(num==1)btn.style.backgroundColor = "green";
        else if(num==2)btn.style.backgroundColor = "yellow";
        else if(num==3)btn.style.backgroundColor = "purple";
    },1000);
}

//Adding eventListner on all button
let colorButton=document.querySelectorAll(".btn");

    for(btn of colorButton){
    btn.addEventListener("click",buttonPress);
    }


//Logic of game
function buttonPress(){
   if(startGame){
     userblink(this.id);
    userGen.push(this.id);
    let subHead=document.getElementById("level");
    if(computerGenerated.length==userGen.length && userGen[userGen.length-1]==computerGenerated[userGen.length-1] ){
        level++;
        let num=Math.floor(Math.random()*4);
        subHead.innerText=`Level ${level}`;
        computerGenerated.push(num);
        computrblink(num);
        userGen=[];
    }else if(userGen[userGen.length-1]!=computerGenerated[userGen.length-1]){
        subHead.innerText=`Game Over! Score ${level}`;
        newGame()
        startGame=false;
    }
   }
}

//Start Game
startButton.addEventListener("click", function() {
    level=1;
    startGame=true;
    startButton.style.visibility = "hidden";
    subHead.innerText=`Level ${level}`;
    let num=Math.floor(Math.random()*4);
    computrblink(num);
    computerGenerated.push(num);
});

//Start new Game
function newGame(){
    startButton.style.visibility = "visible";
    subHead.innerText=`Game Over! Score ${level}`;
}

