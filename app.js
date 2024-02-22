
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//player O
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.classList.add("player-o");
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("player-x");
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    msgcontainer.classList.remove("glitter");
    const confettiContainer = document.getElementById("confetti-container");
    // Remove existing confetti if any
    confettiContainer.innerHTML = "";
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    msgcontainer.classList.add("glitter");
    startConfettiShower();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1 != "" && posval2 != "" && posval3 != "" ){
            if(posval1===posval2 && posval2===posval3){
                console.log("winner",posval1);
                showWinner(posval1);
            }
        }
    }
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

