//Twój kod
let tempArray = [];

process.argv.forEach((element, index) => {
    if (index > 1) {
        tempArray.push(Number(element));
    }
});

tempArray.sort((a,b) => a - b);

console.log(tempArray);

tempArray.forEach(element => {
    setTimeout(() => {
        console.log(element);

    }, Number(element + "000"));
})
