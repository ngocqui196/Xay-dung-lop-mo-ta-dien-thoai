function Battery () {
    this.setEnergy = function (energry) {
        this.energy = energry;
    };
    this.getEnergy = function () {
        return this.energy;
    }

}
function Phone1() {
    this.getArrIB = function () {
        return this.arrIB;
    };
    this.setArrIB = function (arrIB) {
        this.arrIB = arrIB;
    };
    this.getarrOB = function () {
        return this.arrOB;
    };
    this.setArrOB = function (arrOB) {
        this.arrOB = arrOB;
    };
    this.turnOnMobile = function () {
        this.status = true;
    };
    this.turnOffMobile = function () {
        this.status = false;
    };
    this.checkScreen = function () {
        if (this.status === false) {

        }
    }
}