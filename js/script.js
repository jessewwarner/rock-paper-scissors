function getComputerChoice(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const OPTIONS = ['Rock', 'Paper', 'Scissors'];
console.log(getComputerChoice(OPTIONS));