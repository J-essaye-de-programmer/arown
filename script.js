const SCALEDRONE_CHANNEL_ID = "J1ipAEoQIa1Xv2li"; // Your ScaleDrone Channel ID

const drone = new ScaleDrone(SCALEDRONE_CHANNEL_ID);
const roomName = "observable-room";
let room;

drone.on("open", (error) => {
    if (error) {
        console.error("Connection error:", error);
        return;
    }
    room = drone.subscribe(roomName);
    room.on("data", (message) => {
        displayMessage(message);
    });
});

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value.trim();
    if (message !== "") {
        drone.publish({ room: roomName, message });
        messageInput.value = "";
    }
}

function displayMessage(message) {
    const messagesDiv = document.getElementById("messages");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Vernicle is ready!");
});
