const removeFromArray = function(someArray, ...arrayParameters) {

    for(let i = 0; i < someArray.length; i++){
        for(let j = 0; j < arrayParameters.length; j++){

            if(someArray[i] === arrayParameters[j]){
                someArray.splice(i,1);
                i--;
            }
        }
    }
    return someArray;
};

// Do not edit below this line
module.exports = removeFromArray;
