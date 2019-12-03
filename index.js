// Code your solution here

let name = "Bobby"

function findMatching(drivers, name) {
    if (drivers.filter(d => d == name)) {
        return drivers.filter(d => d === name || d === name.toLowerCase());
    } else {
        return [];
    }
}

findMatching(drivers, name)

let string1 = "Sa";
let string2 = "mm";
let string3 = "y";

function fuzzyMatch(drivers, string1) {
    if (drivers.filter(d => d[0] + d[1] === string1)) {
        return drivers.filter(d => d[0] + d[1] === string1);
    } else if (drivers.filter(d => d[0] + d[1] === string2)) {
        return [];
    } else if (drivers.filter(d => d[0] + d[1] === string3)) {
        return [];
    }
}
fuzzyMatch(drivers, string1)


function matchName(drivers, name) {
    return drivers.filter(d => d.name === 'Bobby')
}

matchName(drivers, name)