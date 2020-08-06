function promptDirection(question) {
    var result1 = prompt(question);
    if (result1.toLowerCase() == "left")
        return "L";
    if (result1.toLowerCase() == "right")
        return "R";
    throw new Error("Invalid direction: " + result1);
}
function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    }
    else {
        return "two angry bears";
    }
}
try {
    console.log("you see", look());
}
catch (error) {
    console.log("Something went wrong: " + error);
}
