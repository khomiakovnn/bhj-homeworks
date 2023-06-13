function getHole(index) {
    return document.getElementById('hole'+index)
}

for (let index = 1; index < 10; index++) {
    const hole = getHole(index);
    hole.onclick = () => {
        if (hole.classList.contains( 'hole_has-mole' )) {
            document.getElementById("dead").textContent = Number(document.getElementById("dead").textContent) + 1
            if (document.getElementById("dead").textContent == 10) {
                alert('You win');
                for (let index = 1; index < 10; index++) {
                    const hole = getHole(index);
                    hole.onclick = () => null
                }
            }
        } else {
            document.getElementById("lost").textContent = Number(document.getElementById("lost").textContent) + 1
            if (document.getElementById("lost").textContent == 5) {
                alert('Game over');
                for (let index = 1; index < 10; index++) {
                    const hole = getHole(index);
                    hole.onclick = () => null
                }
            }
        }
    };
}
