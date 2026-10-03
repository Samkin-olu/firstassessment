// problem 1
function deepEqual(objA, objB) {
    // Check if both values are strictly equal
    if (objA === objB) {
        return true;
    }
};
const objA = {
    name: "Samuel",
    age: 25,
    address: {
        city: "Lagos",
        country: "Nigeria"
    }
};

const objB = {
    name: "Samuel",
    age: 25,
    address: {
        city: "Lagos",
        country: "Nigeria"
    }
};

console.log(deepEqual(objA, objB)); // true

// problem 2
