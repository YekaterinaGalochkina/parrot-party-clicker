// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1

let count = 0;
    const countSpan = document.getElementById("click-count");
    const parrot = document.getElementById("party-parrot");
    const resetButton = document.getElementById("reset-button");
    const heading = document.querySelector("h1");

    parrot.addEventListener("click", () => {
        count++;
        countSpan.textContent = count;

        if (count === 15) {
            parrot.style.transform = "scale(1.5)";
            heading.innerHTML = `Clicks: <span id="click-count">${count}</span> 🎉`;
        }
    });

// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.

    resetButton.addEventListener("click", () => {
        count = 0;
        countSpan.textContent = count;
    })


// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)




// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
