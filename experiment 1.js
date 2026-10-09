const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("greet", () => {
    console.log("Hello! Welcome to Node.js");
});

myEmitter.on("exit", () => {
    console.log("Exit event triggered");
});

myEmitter.emit("greet");
myEmitter.emit("exit");