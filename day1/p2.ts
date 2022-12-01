const input = await Deno.readTextFile('in.txt');
const chunks = input.split('\n\n');
let largestNumbers: number[] = [];
chunks.forEach(elf => {
    let lines = elf.split('\n');
    let sum = 0;
    lines.forEach(line => {
        sum += parseInt(line);
    });
    largestNumbers.push(sum);
});
let top3 = largestNumbers.sort((a, b) => b - a).slice(0, 3);
console.log(top3[0] + top3[1] + top3[2]);