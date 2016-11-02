var socket = io("http://97.119.50.36:3000");

socket.on("disconnect", function() {
    setTitle("DISCONNECTED");
});

socket.on("connect", function() {
    setTitle("CONNECTED");
});

socket.on("message", function(message) {
    printMessage(message);
})

document.forms[0].onsubmit = function() {
    var input = document.getElementById('message');
    var name = document.getElementById('name')
    printMessage(name.value + " : " + input.value);
    socket.emit("chat", name.value + " : " + input.value);
    input.value = '';
};

function setTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerHTML = message;
    document.querySelector('div.messages').appendChild(p);
}