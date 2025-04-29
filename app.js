let user_score=0;
let comp_score=0;
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#mess");

const userscoree=document.querySelector("#user_score");
const compscore=document.querySelector("#comp_score");

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
}); 
const getcompchoice=()=>{
    const option =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const playgame=(userchoice)=>{
    const compchoice = getcompchoice();

    if(userchoice=== compchoice){
        drawgame();
    }
    else{
         let userwin=true;
         if(userchoice ==="rock"){
            userwin=compchoice==="paper"?false:true;
         } 
         else if (userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
         }
         else{
            userwin =compchoice==="rock"?false:true;
         }
    showwinner(userwin,userchoice,compchoice);
    }
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user_score++;
        userscoree.innerText=user_score; 
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compscore.innerText=comp_score;
        msg.innerText=`you lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";

    }
};
const drawgame=()=>{
    msg.innerText="game is a draw.playagain";
    msg.style.backgroundColor="black";
};

