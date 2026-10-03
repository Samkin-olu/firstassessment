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
function diffObjects(oldObj, newObj) {
  /*
   *
   *
   *
   *
   *
   */
}
const oldObj = { 
    name: 'Setemi', 
    role: 'Engineer', 
    country: 'Jamaica' 
}
const newObj = { 
    name: 'Setemi', 
    role: 'Senior Engineer', 
    city: 'Kingston' 
}
console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))

// problem 3
function deepFreeze(obj) {
  /*
   *
   *
   *
   *
   *
   */
}
const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true
