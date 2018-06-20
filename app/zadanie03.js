let sum = 0;

process.argv.forEach((element, index) => {
    if (index > 1) {
        sum += Number(element)
    }
});

console.log(sum);