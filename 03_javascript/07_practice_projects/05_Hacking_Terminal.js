// Create terminal screen
document.body.style.backgroundColor = "green";
document.body.style.color = "black";
document.body.style.fontFamily = "monospace";
document.body.style.padding = "20px";
document.body.style.fontSize = "22px";

const terminal = document.createElement("div");
document.body.appendChild(terminal);

const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

// Function to create blinking dots
function createBlinkingDots() {
    const dots = document.createElement("span");
    dots.textContent = "...";

    let visible = true;

    setInterval(() => {
        dots.style.visibility = visible ? "hidden" : "visible";
        visible = !visible;
    }, 500);

    return dots;
}

// Random delay between 1 and 7 seconds
function randomDelay() {
    return Math.floor(Math.random() * 7000) + 1000;
}

async function showMessages() {
    for (const msg of messages) {
        const line = document.createElement("div");

        const text = document.createElement("span");
        text.textContent = msg;

        line.appendChild(text);
        line.appendChild(createBlinkingDots());

        terminal.appendChild(line);

        await new Promise(resolve =>
            setTimeout(resolve, randomDelay())
        );
    }
}

showMessages();