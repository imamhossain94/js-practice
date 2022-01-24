//npm install prompt-sync
const prompt = require("prompt-sync")();

var t = prompt();

while(t--) {
    var x = prompt();
    if(x.length > 10){
        console.log(x[0] + (x.length-2) + x[x.length-1]);
    }else{
        console.log(x);
    }
}

