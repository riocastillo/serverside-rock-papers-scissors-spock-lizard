const buttons = document.querySelectorAll("button")
const choiceArray = ['rock', 'paper', 'scissors', 'spock', 'lizard']

buttons.forEach((option) => {
  option.addEventListener("click", (event) => {
    let userChoice = event.target.value
    let computerChoice = choiceArray [Math.floor(Math.random() * 5)]
    document.querySelector('.user').innerText = 
    'you selected:' + ' ' + userChoice 
    document.querySelector('.bot').innerText = 
    'bot selected:' + ' ' + computerChoice

    fetch(`/api?user=${userChoice}&computer=${computerChoice}`)
    .then(response => response.json())
    .then((data) => {
        if(data.result === -1){
            document.querySelector(".result").innerText = "result: the bot won" + " "
        }
        else if(data.result === 0){
            document.querySelector(".result").innerText = "result: it's a tie" + " "
        }
        else if(data.result === 1){
            document.querySelector(".result").innerText = "result: you won" + " "
        }
    })
    .catch(err => console.log(err)
  )}
  )}
)









