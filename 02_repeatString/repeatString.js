const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    let finishedString = "";
    for(let i = 0; i < num; i ++){
        finishedString += string;
    }

    return finishedString;

};

// Do not edit below this line
module.exports = repeatString;
