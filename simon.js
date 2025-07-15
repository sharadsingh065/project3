let gameSeq = [];
let userSeq = [];

 let btns = ["red", "yellow", "green", "purple"];

let level = 0;
let started = false;


let h2 =document.querySelector('h2');


document.addEventListener('keypress', ()=>{
        if(started == false){
              console.log('game is started');
              started = true;

              levelUp();
        }
});

 function gameFlash(btn){
       btn.classList.add('flash');
       setTimeout(()=>{
        btn.classList.remove('flash');
       }, 250);
 }

 function userFlash(btn){
      btn.classList.add('user-flash');
      setTimeout(()=>{
       btn.classList.remove('user-flash');
      }, 250);
}


function levelUp(){
      userSeq = [];
      level++;
        h2.innerText =`Level ${level}`;
        
        //  choose random color
    let randomIdx = Math.floor(Math.random()*3);
          let randomColor =  btns[randomIdx]; 
          let randomBnt = document.querySelector(`.${randomColor}`);

      //     console.log(randomIdx+1);
      //     console.log(randomColor);
      //     console.log(randomBnt);

          gameSeq.push(randomColor);
          console.log(gameSeq);
  
        gameFlash(randomBnt);

}
  
function checkAns(idx){
      if(gameSeq[idx] === userSeq[idx]){
            if(userSeq.length === gameSeq.length){
                  setTimeout(levelUp,1000);
            }
      }else{
            h2.innerHTML =`Game over ! Your score is <b> ${level} </b> <br> press any key to start`;
            document.querySelector('body').style.backgroundColor = "red";
            setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
                 
            },1500);

            reset();
      }
}

function buttonPress(){
      let btn = this;
      // console.log(this);
       userFlash(btn);

       let userColor  = btn.getAttribute("id");
       userSeq.push(userColor);

       checkAns(userSeq.length-1);

}
 
 let allBtns = document.querySelectorAll('.btn');
   for( btn of allBtns){
      btn.addEventListener('click', buttonPress);
   }

 function reset(){
     started = false;
     level = 0;
     gameSeq = [];
     userSeq = [];    

 }