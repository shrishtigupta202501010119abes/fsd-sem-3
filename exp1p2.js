const EventEmitter = require("events");

const button = new EventEmitter();

// Similar to addEventListener()
button.on("click", () => {
    console.log("Button clicked!");
});

button.on("mouseover", () => {
    console.log("Mouse over button!");
});

// Similar to triggering an event
button.emit("click");
button.emit("mouseover");