let Eventmitter = require('events').EventEmitter;
let evt = new Eventmitter();
evt.on("helloNode", (str) => {
    console.log("Hello! " + str);
});
setTimeout(() => {
    evt.emit("helloNode", "Node.js");
}, 3000);