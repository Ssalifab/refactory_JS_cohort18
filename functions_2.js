let name = "ssali";
function greetFarmer() {

    console.log("Hello, welcome to Young4Chix", name);
};
greetFarmer();

function submitRequest() {
    let lastName = "lwanga";
    console.log("Your chick request has been submitted", lastName);
};

function calculateTotalCost(quantity, pricePerChick) {
    return quantity * pricePerChick;
};
console.log(calculateTotalCost(2, 5));
submitRequest();

function getApprovalStatus(requestedChicks) {
    if (requestedChicks <= 500) {
        return "Approved";
    } else {
        return "Rejected";
    }
}
let status = getApprovalStatus(300);
console.log("Request status:" + status);


function greetFarmers(farmerName) { //let greetFarmers=function(farmerName) makes it an anonymous function
    console.log("hello" + " " + farmerName + " " + "welcome to young 4 chix")
};


greetFarmers("ssali");
greetFarmers("joseph");
greetFarmers("kamada");

//function taking another function as parameter

function processTheMoney(callback) {
    callback();
};

processTheMoney(function () {
    console.log("colleagues, Money will come!")
});

//Function producing a function

function greetTeacher(lname) {
    return function () {
        console.log("hello," + " " + lname + " " + "welcome to my school");
    };

};
let greet = greetTeacher("Alhamdulillah");
greet();