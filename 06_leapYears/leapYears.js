/*Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap
 years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap 
years).*/ 

const leapYears = function(year) {
    if(year % 4 === 0){
        if(year % 400 === 0){
            if(year % 100 === 0){
                return true;
            }
            return true;
        }
        if(year % 100 === 0){
            return false;
        }
        return true;

    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;