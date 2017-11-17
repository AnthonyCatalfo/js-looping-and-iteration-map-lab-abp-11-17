// Code your solution in this file.
function lowerCaseDrivers(drivers){
return drivers.map((driver) => {
    return driver.toLowerCase()})

}
function splitFullName (fullName){
let firstName = fullName.split(' ').slice(0, -1).join(' ');
let lastName = fullName.split(' ').slice(-1).join(' ');
let firstLast = {firstName:firstName, lastName:lastName};
return firstLast;
}
function nameToAttributes(drivers){
return drivers.map(splitFullName);
}
