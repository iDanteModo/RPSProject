


const greetings = document.querySelector("#greetings");
const playerChoice = document.querySelector("#playerChoice");
const rePlay = document.querySelector("#rePlay");
const startButton = document.querySelector("#startButton");
const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector("#noButton");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");






let result, choice, repeat = true, display = 1;

//Shows the welcome message with the button START 


function greet () {
    greetings.setAttribute('style', 'display: ');
    greetings.setAttribute('open', "");
    startButton.addEventListener('click', () => {
        greetings.close();
        greetings.setAttribute('style', 'display : none;');
        playerChoice.setAttribute('open', "");
        playerChoice.setAttribute('style', 'display: flex; text-align: center; flex-direction: column;')

    })
}
    
    
// Randoms computer choice 

function computerChoice() {
    let result = Math.floor(Math.random() * 3);
    return result;


}

// Human has 3 choices 

function humanChoice() {
    const newDialog = document.createElement("dialog");
    const text = document.createElement('p');
    const okButton = document.createElement('button');
    if (result == 0){
        text.textContent = "Computer chose ROCK";
    }else if (result == 1){ 
        text.textContent = "Computer chose PAPER";
    }else {
        text.textContent = "Computer chose SCISSORS";
    }
    okButton.textContent = "OK "
    newDialog.appendChild(text);
    newDialog.appendChild(okButton);
    document.body.appendChild(newDialog);
   
    
    okButton.addEventListener('click', () => { 
        winner(result, choice);
        newDialog.close();
    })



    rock.addEventListener("click", () => {
        choice = 0;
        playerChoice.setAttribute('style', 'display: none;');
        newDialog.setAttribute('open', "");
        

        });
    paper.addEventListener("click", () => {
        choice = 1;
        playerChoice.setAttribute('style', 'display: none;');
        newDialog.setAttribute('open', "");

        });
    scissors.addEventListener("click", () => {
        choice = 2;
        playerChoice.setAttribute('style', 'display: none;');
        newDialog.setAttribute('open', "");

        });
    }


function winner(result, choice) {
    const dialogNew = document.createElement('dialog');
    const text = document.createElement('p');
    const button = document.createElement('button');
    const button2 = document.createElement('button');
    button.textContent = "PLAY AGAIN";
    button2.textContent = "QUIT";


    if (result == 0 && choice == 2) {
        text.textContent = " COMPUTER WINS";
    } else if (result == 1 && choice == 0){
        text.textContent = " COMPUTER WINS";
    } else if (result == 2 && choice == 1){
        text.textContent = " COMPUTER WINS";
    } else if(result == choice){
        text.textContent = "DRAW";
    } else   
        text.textContent = " YOU WIN";
    
    
    dialogNew.appendChild(text);
    dialogNew.appendChild(button);
    dialogNew.appendChild(button2);
    document.body.appendChild(dialogNew);
    dialogNew.setAttribute('open', "");   
    
    
    
    
    button.addEventListener('click', () => {
        dialogNew.close();
        greet();
    } ) 
    
    button2.addEventListener('click', () => {
        dialogNew.close();
    })
    

    


}

function playGame(){
    greet();
    result= computerChoice();
    choice = humanChoice();
    // playAgain();
   
}
playGame();
