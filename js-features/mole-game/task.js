function getHole(index) {
    return document.getElementById('hole'+index)
}

for (let index = 1; index < 10; index++) {
    const hole = getHole(index);
    hole.onclick = () => {
        let deadCount = document.getElementById("dead").textContent;
        let lostCount = document.getElementById("lost").textContent;
        if (hole.classList.contains( 'hole_has-mole' )) {
            document.getElementById("dead").textContent = Number(deadCount) + 1
            if (deadCount == 9) {
                alert('You win');
                document.getElementById("dead").textContent = 0;
                document.getElementById("lost").textContent = 0;
            }
        } else {
            document.getElementById("lost").textContent = Number(lostCount) + 1
            if (lostCount == 4) {
                alert('Game over');
                document.getElementById("dead").textContent = 0;
                document.getElementById("lost").textContent = 0;
            }
        }
    };
}
