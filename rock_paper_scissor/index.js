console.log("Welcome to the game")
const getUserChoice=(userInput)=>{
    userInput.toLowerCase()
    if (userInput==="rock" || userInput==="paper" || userInput==="scissors"){
        return userInput;
    }else{
        return "Please use vaild input"
    }
}
// console.log(getUserchoice("potato"))

// computer choice fn
const getComputerChoice=()=>{
    const randomNumber=Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}


// determine winner 
const determineWinner =(userChoice,computerChoice)=>{
    if (userChoice===computerChoice){
        return "It's a tie between human and machine"
    }
    if (userChoice==="rock"){
        if (computerChoice==="paper"){
            return "Snap! Machine wins"
        }else{
            return "Human wins"
        }
    }

    if (userChoice==="paper"){
        if (computerChoice==="scissors"){
            return "Snap! Machine wins"
        }else{
            return "Human wins"
        }
    }
    if (userChoice==="scissors"){
        if (computerChoice==="rock"){
            return "Snap! Machine wins"
        }else{
            return "Human wins"
        }
    }
}
const playGame=()=>{
    const userChoice=getUserChoice("rock")
    const computerChoice=getComputerChoice()
    console.log("you threw " + userChoice)
    console.log("machine threw " + computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
  }
  
playGame()
