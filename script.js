let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0;
let roomsVisited = JSON.parse(localStorage.getItem("roomsVisited")) || [];
let puzzleSolved = localStorage.getItem("puzzleSolved") === "true";
const correctCode = "666";

document.addEventListener('DOMContentLoaded', () => {
    updatePointsDisplay();
    unlockRooms();
});

document.addEventListener('DOMContentLoaded', function () {
    // Check localStorage for content and update the page if it exists
    const roomTwo = document.getElementById("roomtwo");
    const roomTwoUnlocked = localStorage.getItem("roomTwoUnlocked");
    
    if (roomTwoUnlocked) {
        roomTwo.innerHTML = roomTwoUnlocked;
    }
    
    const roomThree = document.getElementById("roomThree");
    const roomThreeUnlocked = localStorage.getItem("roomThreeUnlocked");
    
    if (roomThreeUnlocked) {
        roomThree.innerHTML = roomThreeUnlocked;
    }
});

function navigateToRoom(roomPage) {
    window.location.href = roomPage;
}


function openNote() {
      const note = document.getElementById('folded-Note');
      note.style.display = 'block'; // 'auto' is not a valid value for display; use 'block' or another valid value
    }

    const openNoteBtn = document.getElementById('open-Note');
    openNoteBtn.addEventListener('click', openNote);


function addPoints(roomId) {
    if (!roomsVisited.includes(roomId)) {
        roomsVisited.push(roomId);
        points += 10;
        localStorage.setItem("points", points);
        localStorage.setItem("roomsVisited", JSON.stringify(roomsVisited));
        alert("You gained 10 points!");
        updatePointsDisplay();
        unlockRooms();
    } else {
        alert("You already explored this room.");
    }
}



function solvePuzzle() {
    const userInput = document.getElementById('puzzleInput').value;
    if (userInput === correctCode) {
        alert("You solved the puzzle and earned 20 points!");
        puzzleSolved = true;
        points += 20;
        localStorage.setItem("puzzleSolved", "true");
        localStorage.setItem("points", points);
        updatePointsDisplay();
        unlockRooms();
    } else {
        alert("Wrong code. Try again.");
    }
}

function unlockRooms() {
    roomsVisited.forEach(room => {
        const roomElement = document.getElementById(room);
        if (roomElement) {
            roomElement.classList.remove('locked');
        }
    });
}

if (puzzleSolved) {
        document.getElementById('secretRoom').classList.remove('locked');
    }


function updatePointsDisplay() {
    document.getElementById('points').textContent = points;
}
