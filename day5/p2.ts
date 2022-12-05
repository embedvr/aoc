let stacks: Record<number, string[]> = {
    1:   ["G", "P", "N", "R"],
    2:   ["H", "V", "S", "C", "L", "B", "J", "T"],
    3:   ["L", "N", "M", "B", "D", "T"],
    4:   ["B", "S", "P", "V", "R"],
    5:   ["H", "V", "M", "W", "S", "Q", "C", "G"],
    6:   ["J", "B", "D", "C", "S", "Q", "W"],
    7:   ["L", "Q", "F"],
    8:   ["V", "F", "L", "D", "T", "H", "M", "W"],
    9:   ["F", "J", "M", "V", "B", "P", "L"]
};

const input = await Deno.readTextFile('in.txt');

   
let lines = input.split('\n\n')[1].split('\n');
console.log(lines);
   
lines.forEach(command => {
    const [_, amount, _1, from, _2, to] = command.split(' ');
    const crates = stacks[Number(from)].splice(0, Number(amount))//.reverse();
    console.log(`moving ${crates} from ${from} to ${to}`);
    stacks[Number(to)].unshift(...crates);
    let tops = Object.values(stacks).map(stack => stack[0]);
    console.log(tops);
});


let tops = Object.values(stacks).map(stack => stack[0]);

console.log(tops);