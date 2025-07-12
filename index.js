const boxes= document.querySelectorAll('.box');
let currentplayer= "X";
let gameplayer=true;
const winnercombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function checkWinner() {
    return winnercombinations.some(combination => {
        const [a, b, c] = combination;
        return boxes[a].textContent && 
               boxes[a].textContent === boxes[b].textContent && 
               boxes[a].textContent === boxes[c].textContent;
    });
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(!box.classList.contains('active')) {
            box.classList.add('active');
            box.textContent = currentplayer;
            console.log("clicking box");
            
            
            
            
            if (checkWinner()) {
                alert(`${box.textContent} is the winner! `);
                gameplayer = false;
                boxes.forEach(b => b.classList.add('active')); 
            }
           else if (Array.from(boxes).every(b => b.classList.contains('active'))) {
                alert("It's a draw!");
                boxes.forEach(b => b.classList.add('active')); 
                gameplayer = false;
            }
            box.style.color = currentplayer === "X" ? "red" : "blue";
            box.style.fontSize = "2em";
            box.style.fontWeight = "bold";
            box.style.textAlign = "center";
            box.style.lineHeight = "100px";
            currentplayer = currentplayer === "X" ? "O" : "X";
    }
    });



});




