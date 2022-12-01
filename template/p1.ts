const input = await Deno.readTextFile('in.txt');
const chunks = input.split('\n\n');
let largestNum = 0;
chunks.forEach(elf => {
    let lines = elf.split('\n');
    let sum = 0;
    lines.forEach(line => {
        sum += parseInt(line);
    });
    if (sum > largestNum) {
        largestNum = sum;
    }
});
console.log(largestNum);