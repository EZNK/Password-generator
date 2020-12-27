const letters = ('0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm~!@#$%^&*()+`":<>;\//')
let pass = Math.random(letters).toString(36).slice(2, 20);
document.getElementById("pass").innerHTML = pass;
document.getElementById("button").onclick = function() {
    const letters = ('0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm~!@#$%^&*()+`":<>;\//')
let pass = Math.random(letters).toString(36).slice(2, 20);
document.getElementById("pass").innerHTML = pass;
}