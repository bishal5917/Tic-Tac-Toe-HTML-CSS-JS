// console.log("Lets go")
let player = "X"   //default player will be X

//function to declare the winner
const winnerCheck = () => {
    let winPossibilities = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8]
        , [0, 3, 6], [1, 4, 7], [2, 5, 8]
        , [0, 4, 8], [2, 4, 6]
    ]
    let boxcontents = document.getElementsByClassName('boxcontent')
    winPossibilities.forEach(e => {
        if ((boxcontents[e[0]].innerText === boxcontents[e[1]].innerText) && (boxcontents[e[1]].innerText === boxcontents[e[2]].innerText) && (boxcontents[e[0]].innerText !== "")) {
            let winner = boxcontents[e[0]].innerText
         
            let showwinner = document.getElementById('alertComponent')
            showwinner.innerHTML = `<div id="stylealert">Congrats ! Player ${winner} is the winner</div>`
            setTimeout(() => {
                showwinner.innerHTML = ""
                window.location.reload()
            }, 2000);
           
        }
    })
}

//function to add X or ) in boxes alc to turn
const togglePlayer = () => {
    return player === "X" ? "O" : "X"
}

// click listener to manipulate the divs
let box = document.getElementsByClassName('boxes')
Array.from(box).forEach(element => {
    let boxcontent = element.querySelector('.boxcontent')
    element.addEventListener('click', () => {

        if (boxcontent.innerText == "") {
            boxcontent.innerText = player;
            player = togglePlayer();
            winnerCheck();
        }
    })
})

