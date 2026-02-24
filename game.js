let boxes = document.querySelectorAll(".box");
let resetbtmn=document.querySelector("#reset");
let msgbox = document.querySelector(".msgbox");
let msg=document.querySelector(".msg");

let turnO = true;
const winpattern=[
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
] ;

const resetgame = () =>{
    turnO=true;
    enableboxes();
    msgbox.classList.add("hide");
    msg.innerText="";
    

}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was cliled");
        if(turnO) {
            box.innerText = "O";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
        
    });
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `🎉🎉Player ${winner} wins!🎉🎉`;
    
    msgbox.classList.remove("hide");
    disableboxes();
   
  };

const checkwinner=() =>{
    for (let pattern of winpattern){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);

                showWinner(pos1val);


            }
        }
    }

};
resetbtmn.addEventListener("click",resetgame);