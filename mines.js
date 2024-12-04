const diamond = 'https://i.ibb.co/1d8v4gz/20240928-101731-0000.png';

// Selecting grid container and start button
const gridContainer = document.querySelector('.grid-container');
const startBtn = document.getElementById('startBtn');
const revealBtn = document.getElementById('revealButton');
let revealCount = 0;

// Function to create grid items
function createGridItems() {
    for (let i = 0; i < 25; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

// Function to get random grid items
function getRandomItems(count, excludeIndexes = []) {
    const randomIndexes = [];
    while (randomIndexes.length < count) {
        const randomIndex = Math.floor(Math.random() * 25);
        if (!randomIndexes.includes(randomIndex) && !excludeIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }
    return randomIndexes;
}

// Function to change selected grid items
function changeGridItems() {
    const randomIndexes = getRandomItems(5);
    randomIndexes.forEach(index => {
        gridContainer.children[index].style.backgroundImage = `url(${diamond})`;
        gridContainer.children[index].style.backgroundSize = 'cover';
        gridContainer.children[index].style.backgroundPosition = 'center';
        gridContainer.children[index].style.backgroundColor = '#1e2230'; // Optional background color
    });
    
    // Reset grid items after 20 seconds
    setTimeout(() => {
        randomIndexes.forEach(index => {
            gridContainer.children[index].style.backgroundImage = ''; // Remove diamond images
            gridContainer.children[index].style.backgroundColor = ''; // Reset background color
        });
    }, 20000);
}

// Function to reveal one more diamond
function revealDiamond() {
    if (revealCount < 3) {
        const currentDiamonds = [];
        for (let i = 0; i < gridContainer.children.length; i++) {
            if (gridContainer.children[i].style.backgroundImage.includes(diamond)) {
                currentDiamonds.push(i);
            }
        }

        const randomIndexes = getRandomItems(1, currentDiamonds);
        randomIndexes.forEach(index => {
            gridContainer.children[index].style.backgroundImage = `url(${diamond})`;
            gridContainer.children[index].style.backgroundSize = 'cover';
            gridContainer.children[index].style.backgroundPosition = 'center';
            gridContainer.children[index].style.backgroundColor = '#1e2230'; // Optional background color
        });
        revealCount++;
        play();
        if (revealCount >= 3) {
            revealBtn.disabled = true;
        }
    }
}

// Event listener for start button
startBtn.addEventListener('click', () => {
    changeGridItems();
    revealCount = 0;
    revealBtn.disabled = false;
    revealBtn.style.display = 'block';
});

// Generate grid items on page load
createGridItems();

function disable() {
    var x = document.getElementById("startBtn");
    var y = document.getElementById("wait");
    var countdown = 10;
    y.innerHTML = `𝗡𝗲𝘅𝘁 𝗥𝗼𝘂𝗻𝗱 𝗜𝗻 ${countdown} 𝗦𝗲𝗰𝗼𝗻𝗱𝘀 `;

    // Hide the start button
    x.style.display = "none";

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
        countdown--;
        y.innerHTML = `𝗡𝗲𝘅𝘁 𝗥𝗼𝘂𝗻𝗱 𝗜𝗻 ${countdown} 𝗦𝗲𝗰𝗼𝗻𝗱𝘀 `;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            x.style.display = "block";
            y.innerHTML = "";

            // Remove all diamonds after countdown ends
            for (let i = 0; i < gridContainer.children.length; i++) {
                gridContainer.children[i].style.backgroundImage = ''; // Remove diamond images
                gridContainer.children[i].style.backgroundColor = ''; // Reset background color
            }

            // Hide the reveal button
            revealBtn.style.display = 'none';
        }
    }, 1000); // Update every second
}

function play() {
    var audio = document.getElementById("clickk");
    audio.play();
}

function showRevealButton() {
    document.getElementById('revealButton').style.display = 'block';
}

document.getElementById('closePopup').addEventListener('click', function() {
    // Removing popup
    document.getElementById('popupOverlay').style.display = 'none';
});