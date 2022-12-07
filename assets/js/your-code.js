export function getAllDogs() {
    // Your code here
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    // Your code here
    return fetch("/dogs/2");
}

export function postNewDog() {
    // Your code here
}

export function postNewDogV2(name, age) {
    // Your code here
}

export function deleteDog(id) {
    // Your code here
}
