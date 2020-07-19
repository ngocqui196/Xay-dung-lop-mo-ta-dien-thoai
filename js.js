function Battery () {
    this.setEnergy = function (energry) {
        this.energy = energry;
    };
    this.getEnergy = function () {
        return this.energy;
    }

}
function Phone1() {
    this.setMessage = function (message) {
        this.message = message
    };
    this.getMessage = function () {
        return this.message;
    };
    this.sendMessage = function (message,mobile) {
        mobile.setMessage(message);
    }
}

let iphone = new Phone1();
let nokia = new Phone1();

function sendMessage1() {
    iphone.sendMessage(document.getElementById("screenphone1").value,nokia)
    document.getElementById("2").innerHTML = nokia.getMessage();
    document.getElementById("screenphone1").value = "";
}
function sendMessage2() {
    nokia.sendMessage(document.getElementById("2").value,iphone);
    document.getElementById("screenphone1").innerHTML = iphone.getMessage();
    document.getElementById("2").value = "";
}