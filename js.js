function Battery () {
    this.setEnergy = function (energry) {
        this.energy = energry;
    };
    this.getEnergy = function () {
        return this.energy;
    }

}
function Phone1() {
    this.setNameMobile = function (name) {
        this.name = name;
    }
    this.getNameMobile = function () {
        return this.name;
    }
    this.sendMessage = function (sendMessage,mobile) {
        mobile.setMessage(sendMessage);
    }
    this.getMessage = function () {
    return this.message;
    };
    this.setMessage = function (setMessage) {
        this.message = setMessage;
    };


}

let iphone = new Phone1();
let nokia = new Phone1();
    iphone.setNameMobile("IPHONE");
    nokia.setNameMobile("NOKIA")
function sendMessage1() {
    iphone.sendMessage(document.getElementById("screenphone1").value,nokia)
    document.getElementById("2").value = "You have message from " + iphone.getNameMobile() + ": " + nokia.getMessage();
    iphone.setMessage(document.getElementById("screenphone1").value = "");

}

function sendMessage2() {
    nokia.sendMessage(document.getElementById("2").value,iphone);
    document.getElementById("screenphone1").value = "You have message from " + nokia.getNameMobile() + ": " + iphone.getMessage();
    nokia.setMessage(document.getElementById("2").value = "");

}