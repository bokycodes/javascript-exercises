const palindromes = function (str) {
    let str1 = str.replace(/[^a-zA-Z0-9 ]/g, ''); //removes all special characters
    str1 = str1.toLowerCase();
    str1 = str1.replace(/\s/g, ""); //removes all white spaces -> trim() only removes white spaces from beggining and end of a string, not in the middle
    let str2 = "";
    for(let i = str1.length-1; i >= 0; i--){
        str2 = str2 + str1.charAt(i);
    }

    if(str1 === str2){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
